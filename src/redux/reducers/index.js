import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import authReducer from './authReducer';
import homeReducer from './homeReducer';
import { authConfig, homeConfig } from '../../config/persist';

const appReducer = combineReducers({
    auth: persistReducer(authConfig, authReducer),
    home: persistReducer(homeConfig, homeReducer)
});

export default rootReducer = (state, action) => {
    return appReducer(state, action)
}