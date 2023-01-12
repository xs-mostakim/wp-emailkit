import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: '1260px',
};

const PreviewResonsiveSlice = createSlice({
    name: "previewResponsive",
    initialState,
    reducers: {
        responsive: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { responsive } = PreviewResonsiveSlice.actions;
export default PreviewResonsiveSlice.reducer;