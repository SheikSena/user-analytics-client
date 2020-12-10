import { combineReducers } from 'redux';
import AuthReducer from './User/Auth/AuthReducer';

const rootReducer = combineReducers({
    auth: AuthReducer
});

export default rootReducer;