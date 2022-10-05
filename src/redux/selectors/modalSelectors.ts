import { RootState } from "../store";

export const selectIsToggle = (state: RootState) => state.modal.toggle;
export const selectModalImage = (state: RootState) => state.modal.image;
