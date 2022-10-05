import { createReducer } from '@reduxjs/toolkit'
import { toggleModalAction } from '../actions';

interface InitialState {
    toggle: boolean,
    image?: string,
}

const initialState: InitialState = {
    toggle: false,
    image: undefined,
};

export default createReducer(initialState, builder => {
    builder
        .addCase(toggleModalAction, (state, action) => {
            const { image } = action.payload
            return {
                toggle: !state.toggle,
                image,
            };
        });
});