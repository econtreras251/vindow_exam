import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { searchNews } from '../../services/searchService';

export const SEARCH = "SEARCH";
export const searchAction = createAsyncThunk(
    SEARCH,
    async ({ searchTerm, page }: { searchTerm: string, page: number }, thunkAPI) => {
        thunkAPI.dispatch(changeQuery(searchTerm, page));
        return searchNews();
    }
);

export const CHANGE_QUERY = "CHANGE_QUERY";
export const changeQuery = createAction(CHANGE_QUERY, (searchTerm: string, page: number) => {
    console.log(searchTerm, page);
    return { payload: { searchTerm, page } };
});

