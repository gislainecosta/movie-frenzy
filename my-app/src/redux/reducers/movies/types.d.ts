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
  popularMovies: IListMovie[];
  genre: {
    name: string;
    id: number;
    genreMovies: IListMovie[];
    page: number;
    totalPages: number;
  };
  search: {
    string: string;
    searchedMovies: IListMovie[];
    page: number;
    totalPages: number;
  };
  latestMovies: IListMovie[];
}
