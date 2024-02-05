import { createSlice } from "@reduxjs/toolkit";
import {
  handleGenreMoviesAction,
  handleGenrePageMoviesAction,
  handleLatestMoviesAction,
  handleListPopularMoviesAction,
  handleSearchMoviesAction,
  handleSearchPageMoviesAction,
} from "./actions";
import { IMoviesState } from "./types";

const initialState: IMoviesState = {
  popularMovies: [],
  search: {
    string: "",
    searchedMovies: [],
    page: 1,
    totalPages: 1,
  },
  genre: {
    name: "",
    id: 0,
    genreMovies: [],
    page: 1,
    totalPages: 1,
  },
  latestMovies: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    handlePopularMovies: handleListPopularMoviesAction,
    handleSearchMovies: handleSearchMoviesAction,
    handleSearchPageMovies: handleSearchPageMoviesAction,
    handleGenresMovies: handleGenreMoviesAction,
    handleGenrePageMovies: handleGenrePageMoviesAction,
    handleLatestMovies: handleLatestMoviesAction,
  },
});

export const {
  handlePopularMovies,
  handleSearchMovies,
  handleGenresMovies,
  handleSearchPageMovies,
  handleGenrePageMovies,
  handleLatestMovies,
} = moviesSlice.actions;
