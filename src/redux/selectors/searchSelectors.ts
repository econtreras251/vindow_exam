import { RootState } from "../store";

export const selectNews = (state: RootState) => state.search.news;
export const selectPending = (state: RootState) => state.search.pending;
export const selectSearchError = (state: RootState) => state.search.error;
