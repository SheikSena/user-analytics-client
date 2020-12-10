import { LOGIN_REQUEST, SUCCESS, FAILURE, LOGOUT_REQUEST } from './AuthTypes'

export const authenticateUser = (email, password) => {
    return (dispatch) => {
        dispatch(loginRequest());
        if (email === "test" && password === "test") {
            dispatch(success(true));
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
