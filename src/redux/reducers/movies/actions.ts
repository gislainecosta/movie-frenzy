import { PayloadAction } from "@reduxjs/toolkit";
import { IListMovie, IMoviesState } from "./types";

export const handleListPopularMoviesAction = (
  state: IMoviesState,
  action: PayloadAction<IListMovie[]>,
) => {
  state.popularMovies = action.payload;
};

export const handleSearchMoviesAction = (
  state: IMoviesState,
  action: PayloadAction<{
    string: string;
    searchedMovies: IListMovie[];
    page: number;
    totalPages: number;
  }>,
) => {
  state.search = action.payload;
};

export const handleSearchPageMoviesAction = (
  state: IMoviesState,
  action: PayloadAction<{
    searchedMovies: IListMovie[];
    page: number;
  }>,
) => {
  const { searchedMovies, page } = action.payload;
  state.search.searchedMovies = searchedMovies;
  state.search.page = page;
};

export const handleGenrePageMoviesAction = (
  state: IMoviesState,
  action: PayloadAction<{
    genreMovies: IListMovie[];
    page: number;
  }>,
) => {
  const { genreMovies, page } = action.payload;
  state.genre.genreMovies = genreMovies;
  state.genre.page = page;
};

export const handleGenreMoviesAction = (
  state: IMoviesState,
  action: PayloadAction<{
    name: string;
    id: number;
    genreMovies: IListMovie[];
    page: number;
    totalPages: number;
  }>,
) => {
  state.genre = action.payload;
};
