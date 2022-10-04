import { createReducer } from '@reduxjs/toolkit'
import { searchAction } from '../actions';
import { News } from '../../pages/home/news.interface';

interface InitialState {
    news: News[],
    pending: boolean,
    error?: string;
}

const initialState: InitialState = {
    news: [],
    pending: false,
};

export default createReducer(initialState, builder => {
    builder
        .addCase(searchAction.fulfilled, (state, action) => {
            const news = action.payload;
            return {
                ...state,
                news,
                pending: false,
            };
        })
        .addCase(searchAction.pending, (state, _) => {
            return {
                ...state,
                pending: true,
            };
        })
        .addCase(searchAction.rejected, (state, _) => {
            return {
                ...state,
                pending: false,
                error: 'We are sorry but something went wrong fetching the files.'
            };
        });
});