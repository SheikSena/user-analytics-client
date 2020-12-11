import { combineReducers } from 'redux';
import AuthReducer from './User/Auth/AuthReducer';

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const rootReducer = combineReducers({
    auth: AuthReducer
});

export default persistReducer(persistConfig, rootReducer);