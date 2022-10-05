import { createReducer } from '@reduxjs/toolkit'
import { News } from '../../models/News';
import { searchAction } from '../actions';

interface InitialState {
    news: News[],
    pending: boolean,
    options: {
        limit: number;
        page: number;
    },
    count: number;
    error?: string;
}

const initialState: InitialState = {
    news: [],
    pending: false,
    options: {
        limit: +(process.env.REACT_APP_PAGE_SIZE || 10),
        page: 0,
    },
    count: 0,
};

export default createReducer(initialState, builder => {
    builder
        .addCase(searchAction.fulfilled, (state, action) => {
            const { news, count } = action.payload;
            return {
                ...state,
                news,
                pending: false,
                count: count,
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