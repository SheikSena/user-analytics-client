import { LOGIN_REQUEST, SUCCESS, FAILURE, LOGOUT_REQUEST } from './AuthTypes'
import getHistory from 'react-router-global-history';
import Axios from "axios";
import jwt_decode from "jwt-decode";

// const API_URL = "http://localhost:8080/user/";
// const AUTHENTICATE_URL = "http://localhost:8080/authenticate"

const AUTHENTICATE_URL = "https://user-analytics-server.herokuapp.com/authenticate"
// const API_URL = "http://localhost:8080/api/auth/";

export const authenticateUser = (email, password) => {
    return (dispatch) => {
        dispatch(loginRequest());
        Axios.post(AUTHENTICATE_URL, { "username": email, "password": password })
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    var decodedToken = jwt_decode(response.data.token);
                    console.log(decodedToken)
                    dispatch(success(true));
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

const success = (isLoggedIn) => {
    return {
        type: SUCCESS,
        payload: isLoggedIn
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
