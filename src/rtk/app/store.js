import { configureStore } from "@reduxjs/toolkit";
import PreviewReducer from "../features/Preview/PreviewSlice"
import PreviewResonsiveSlice from "../features/Preview/PreviewResonsiveSlice"
import templateReducers from "../features/templates/templateSlice";

const store = configureStore({
  reducer: {
    preview: PreviewReducer,
    Responsive: PreviewResonsiveSlice,
    templates: templateReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
