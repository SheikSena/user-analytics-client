import { LOGIN_REQUEST, SUCCESS, FAILURE, LOGOUT_REQUEST, PAGE_LOAD, SIGNUP_REQUEST } from './AuthTypes'
import { PURGE } from "redux-persist";
import Axios from "axios";

const initialState = {
    userInformation: null,
    isLoggedIn: false,
    error: '',
    buttonDiabled: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                buttonDiabled: true,
                error: ''
            };
        case LOGOUT_REQUEST:
            return {
                ...state
            };
        case SUCCESS:
            var data = { isLoggedIn: action.payload }
            Axios.defaults.headers.common['Authorization'] = 'Bearer ' + action.payload.userInformation.token;
            return data;
        case FAILURE:
            return {
                isLoggedIn: false,
                error: action.payload,
                buttonDiabled: false
            };
        case PURGE:
            return initialState;
        case PAGE_LOAD:
            return {
                error: '',
                buttonDiabled: false
            };
        case SIGNUP_REQUEST:
            return { isLoggedIn: action.payload, message: "Successfully Registered, Please Login In To Your Account" };
        default:
            return state;
    }
};

export default reducer;