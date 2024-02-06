import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "./reducers/movies/reducers";
import { spotifySlice } from "./reducers/spotify/reducers";

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    spotify: spotifySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
