import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    templateList: [],
    error: null,
    currentTemplate: 0,
    isRefetch: false,
}


export const templateSlice = createSlice({
    name: 'templates',
    initialState,
    reducers: {
        currentTempate: (state, action) => {
            state.currentTemplate = action.payload;
        },
        refetchData: (state, action) => {
            state.isRefetch = !state.isRefetch;
        }
    },
});

export const { currentTempate, refetchData } = templateSlice.actions;

export default templateSlice.reducer