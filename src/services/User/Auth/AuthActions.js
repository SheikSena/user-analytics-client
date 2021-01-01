import { LOGIN_REQUEST, SUCCESS, FAILURE, LOGOUT_REQUEST } from './AuthTypes'
import getHistory from 'react-router-global-history';
import Axios from "axios";
import jwt_decode from "jwt-decode";

const getEndpointURL = () => {
    var location = window.location.href;
    if (location.includes("localhost:30")) {
        return "http://localhost:8080/"
    } else if (location.includes("user-analytics")) {
        return "https://user-analytics-server.herokuapp.com/"
    } else {
        alert("SomeThing Went Wrong, Please Try Again")
    }
}

export const authenticateUser = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch(loginRequest());
            if (email.trim().length === 0 || password.trim().length === 0) {
                dispatch(failure('Please Enter Required Fields and Try Again'));
                return;
            }
            const responseData = await Axios.post(getEndpointURL() + "authenticate", { "username": email, "password": password })
            const decodedToken = jwt_decode(responseData.data.token);
            var payLoadData = {
                isLoggedIn: true,
                userInformation: {
                    'firstName': decodedToken.firstName,
                    'lastName': decodedToken.lastName,
                    'userName': decodedToken.sub,
                    'token': responseData.data.token,
                    'userId': decodedToken.id,
                    'tokenExpiration': new Date(decodedToken.exp * 1000).toLocaleString()
                },
                error: ''
            }
            dispatch(success(payLoadData));
            getHistory().push('/dashboard');
        } catch (error) {
            if (error.response) {
                dispatch(failure('Invalid Email Address and Password'));
            }
        }
    }
}

const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    };
};

const success = (data) => {
    return {
        type: SUCCESS,
        payload: data,
    };
};

const failure = (errorMessage) => {
    return {
        type: FAILURE,
        payload: errorMessage
    };
};

export const logoutUser = () => {
    return dispatch => {
        dispatch(logoutRequest());
        dispatch(success(false));
    };
};

const logoutRequest = () => {
    return {
        type: LOGOUT_REQUEST
    };
};
