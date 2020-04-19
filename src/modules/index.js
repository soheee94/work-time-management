import { combineReducers } from 'redux';
import auth from './auth';
import schedule from './schedule';
import date from './date';

const rootReducer = combineReducers({ auth, schedule, date });

export default rootReducer;
