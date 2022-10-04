import { createAsyncThunk } from '@reduxjs/toolkit';
import { News } from '../../pages/home/news.interface';
import { searchNews } from '../../services/searchService';

export const SEARCH = "SEARCH";
export const searchAction = createAsyncThunk(
    SEARCH,
    async (searchTerm: string, thunkAPI) => {
        return searchNews() as Promise<News[]>;
    }
);