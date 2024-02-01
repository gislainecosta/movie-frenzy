import { configureStore } from "@reduxjs/toolkit";
import {moviesSlice } from "./reducers/movies/reducers";

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
