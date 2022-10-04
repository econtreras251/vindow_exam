import { createAsyncThunk } from '@reduxjs/toolkit';
import { searchNews } from '../../services/searchService';

export const SEARCH = "SEARCH";
export const searchAction = createAsyncThunk(
    SEARCH,
    async (searchTerm: string) => {
        console.log("Search term", searchTerm);
        return searchNews();
    }
);