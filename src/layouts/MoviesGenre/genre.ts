import { MoviesService } from "../../services/movies/MovieService";

export const fetchGenreMovies = async (id: number, page: number) => {
  const response = await MoviesService.getMoviesForGenre(id, page);
  return response.data;
};
