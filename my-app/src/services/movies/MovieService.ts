import { MoviesApi } from "../APiConfig";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const language = "language=pt-BR";

const getPopularMovies = async () => {
  return MoviesApi().get(`/movie/popular?api_key=${apiKey}&${language}`);
};

const getGenresMovies = async () => {
  return MoviesApi().get(`genre/movie/list?api_key=${apiKey}&${language}`);
};

const getMoviesForGenre = async (id: number, page: number) => {
  return MoviesApi().get(
    `/discover/movie?api_key=${apiKey}&with_genres=${id}&${language}&page=${page}`,
  );
};

const getMovieById = async (id: number) => {
  return MoviesApi().get(`/movie/${id}?api_key=${apiKey}&${language}`);
};

const searchMovies = async (filter: string, page: number) => {
  return MoviesApi().get(
    `/search/movie?api_key=${apiKey}&query=${filter}&${language}&page=${page}`,
  );
};

export const MoviesService = {
  getPopularMovies,
  getGenresMovies,
  getMoviesForGenre,
  searchMovies,
  getMovieById,
};
