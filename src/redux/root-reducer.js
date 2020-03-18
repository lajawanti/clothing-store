//All reducer should go in root-reducer

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer.jsx';

export default combineReducers({
    user: userReducer
});