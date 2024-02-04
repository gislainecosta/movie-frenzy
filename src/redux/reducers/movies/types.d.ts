export interface IListMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IMoviesState {
  movies: IListMovie[];
  genres: IGenre[];
  search: {
    string: string;
    searchedMovies: IListMovie[];
  };
  latestMovies: IListMovie[];
  isLoading: boolean;
}
