import { MoviesService } from "../../services/movies/MovieService";

export const fetchSearchMovies = async (string: string, page: number) => {
  const response = await MoviesService.searchMovies(string, page);
  return response.data;
};
