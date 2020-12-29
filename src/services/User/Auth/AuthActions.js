import { LOGIN_REQUEST, SUCCESS, FAILURE, LOGOUT_REQUEST } from './AuthTypes'
import getHistory from 'react-router-global-history';

export const authenticateUser = (email, password) => {
    return (dispatch) => {
        dispatch(loginRequest());
        if (email === "test" && password === "test987456321") {
            dispatch(success(true));
            getHistory().push('/dashboard');
        } else {
            dispatch(failure());
        }
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
