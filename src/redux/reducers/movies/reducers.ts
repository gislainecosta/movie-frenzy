import { createSlice } from "@reduxjs/toolkit";
import { handleIsLoadingMoviesAction, handleListMoviesAction, handleSearchMoviesAction,  } from "./actions";
import { IMoviesState } from "./types";

const initialState: IMoviesState = {
  movies: [],
  search: {
    string: "", 
    searchedMovies: []
  },
  latestMovies: [],
  isLoading: false
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    handleMovies: handleListMoviesAction,
    handleSearchMovies: handleSearchMoviesAction,
    handleIsLoadingMovies: handleIsLoadingMoviesAction
  },
});

export const { handleMovies } = moviesSlice.actions;
