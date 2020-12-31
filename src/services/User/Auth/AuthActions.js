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
    return (dispatch) => {
        dispatch(loginRequest());
        Axios.post(getEndpointURL() + "authenticate", { "username": email, "password": password })
            .then(response => {
                if (response.status === 200) {
                    var decodedToken = jwt_decode(response.data.token);
                    var payLoadData = {
                        isLoggedIn: true,
                        userInformation: {
                            'firstName': decodedToken.firstName,
                            'lastName': decodedToken.lastName,
                            'userName': decodedToken.sub,
                            'token': response.data.token
                        }
                    }
                    dispatch(success(payLoadData));
                    getHistory().push('/dashboard');
                } else {
                    dispatch(failure());
                }
            })
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

const failure = () => {
    return {
        type: FAILURE,
        payload: false
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
