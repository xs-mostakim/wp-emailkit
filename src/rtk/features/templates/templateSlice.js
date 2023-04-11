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
        currentTemplateHandler: (state, action) => {
            state.currentTemplate = action.payload;
        },
        refetchDataHandler: (state, action) => {
            state.isRefetch = !state.isRefetch;
        },
        templatesFetchHander: (state, action) => {
            state.templateList = action.payload
        },
    },
});

export const { currentTemplateHandler, refetchDataHandler, templatesFetchHander } = templateSlice.actions;

export default templateSlice.reducer