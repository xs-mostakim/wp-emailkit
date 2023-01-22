import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
};

const PreviewSlice = createSlice({
    name: "preview",
    initialState,
    reducers: {
        previewButton: (state) => {
            state.value = true
        },
        ExitPreviewButton: (state) => {
            state.value = false
        }
    },
});

export const { previewButton, ExitPreviewButton } = PreviewSlice.actions;
export default PreviewSlice.reducer;