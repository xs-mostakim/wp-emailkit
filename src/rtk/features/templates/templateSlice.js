import { createSlice } from '@reduxjs/toolkit';
import { fetchTemplates } from "../../api/templatesApi/fetchTemplates";

const initialState = {
    loading: false,
    templateList: [],
    error: null,
    currentTemplate: 0,
    isRefetch: false,
}

// const config = global.window?.parent?.emailKit?.config || {}

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
    extraReducers: (builder) => {
        builder
            .addCase(fetchTemplates.pending, (state, action) => {
                state.loading = true;
                state.error = null

            })
            .addCase(fetchTemplates.fulfilled, (state, action) => {
                state.loading = false;
                state.templateList = action.payload;
                state.error = null
            })
            .addCase(fetchTemplates.rejected, (state, action) => {
                state.loading = false;
                state.templateList = [];
                state.error = action.error.message
            })
    }
});

export const { currentTempate, refetchData } = templateSlice.actions;

export default templateSlice.reducer