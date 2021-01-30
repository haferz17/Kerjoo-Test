import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import homeReducer from './homeReducer';
import { homeConfig } from '../../config/persist';

const appReducer = combineReducers({
    home: persistReducer(homeConfig, homeReducer)
});

export default rootReducer = (state, action) => {
    return appReducer(state, action)
}