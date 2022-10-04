import { RootState } from "../store";

export const selectNews = (state: RootState) => state.search.news;
export const selectPending = (state: RootState) => state.search.pending;
export const selectSearchError = (state: RootState) => state.search.error;
export const selectSearchCount = (state: RootState) => state.search.count;

const selectSearchQueryOptions = (state: RootState) => state.search.options;
export const selectSearchPage = (state: RootState) => selectSearchQueryOptions(state).page;
export const selectSearchLimit = (state: RootState) => selectSearchQueryOptions(state).limit;
