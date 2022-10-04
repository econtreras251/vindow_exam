import { combineReducers } from '@reduxjs/toolkit'
import searchReducer from './searchReducer';

export default combineReducers({
    search: searchReducer,
});