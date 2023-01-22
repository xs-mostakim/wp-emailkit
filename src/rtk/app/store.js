import { configureStore } from "@reduxjs/toolkit";
import PreviewReducer from "../features/Preview/PreviewSlice"
import PreviewResonsiveSlice from "../features/Preview/PreviewResonsiveSlice"

const store = configureStore({
  reducer: {
    preview: PreviewReducer,
    Responsive: PreviewResonsiveSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
