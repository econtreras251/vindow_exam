import { createAction } from '@reduxjs/toolkit';

export const TOGGLE = "TOGGLE";
export const toggleModalAction = createAction(TOGGLE, (image: string) => {
    return { payload: { image } };
});
