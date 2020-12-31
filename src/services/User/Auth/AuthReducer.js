import { LOGIN_REQUEST, SUCCESS, FAILURE, LOGOUT_REQUEST } from './AuthTypes'
import { PURGE } from "redux-persist";
import Axios from "axios";

const initialState = {
    userInformation: null,
    isLoggedIn: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state
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
                isLoggedIn: action.payload
            };
        case PURGE:
            return initialState;
        default:
            return state;
    }
};

export default reducer;