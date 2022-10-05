import { combineReducers } from '@reduxjs/toolkit'
import searchReducer from './searchReducer';
import modalReducer from './modalReducer';

export default combineReducers({
    search: searchReducer,
    modal: modalReducer,
});