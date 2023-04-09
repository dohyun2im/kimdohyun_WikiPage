
import { combineReducers } from '@reduxjs/toolkit';
import wikiSlice from './wiki-slice';
import userSlice from './user-slice';

const rootReducer = combineReducers({
    wiki: wikiSlice,
    user: userSlice,
});

export default rootReducer;