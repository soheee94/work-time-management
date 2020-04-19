import { combineReducers } from 'redux';
import auth from './auth';
import schedule from './schedule';

const rootReducer = combineReducers({ auth, schedule });

export default rootReducer;
