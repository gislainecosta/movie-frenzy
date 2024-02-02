import { PayloadAction } from "@reduxjs/toolkit";
import { IMovie, IMoviesState } from "./types";

export const handleListMoviesAction = (
  state: IMoviesState,
  action: PayloadAction<{
    value: IMovie[];
  }>,
) => {
  const { value } = action.payload;
  state.movies = value;
};

export const handleSearchMoviesAction = (
  state: IMoviesState,
  action: PayloadAction<{
    value: { string: string; searchedMovies: IMovie[] };
  }>,
) => {
  const { value } = action.payload;
  state.search = value;
};

export const handleIsLoadingMoviesAction = (
  state: IMoviesState,
  action: PayloadAction<{
    value: boolean;
  }>,
) => {
  state.isLoading = action.payload.value;
};
