import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IGenre } from "../../redux/reducers/movies/types";
import { MoviesService } from "../../services/movies/MovieService";
import { AppDispatch, RootState } from "../../redux/store";
import { handlePopularMovies } from "../../redux/reducers/movies/reducers";
import MoviesHome from "../../layouts/MoviesHome";
import MoviesGenre from "../../layouts/MoviesGenre";
import Genres from "./genres";
import * as St from "./styles";

export default function Home() {
  const [genres, setGenres] = useState<IGenre[]>();
  const { movies } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  const fetchPopularMovies = async () => {
    const response = await MoviesService.getPopularMovies();
    return response.data.results;
  };

  const fetchGenres = async () => {
    const response = await MoviesService.getGenresMovies();
    return response.data.genres;
  };

  useMemo(() => {
    fetchPopularMovies()
      .then((data) => {
        dispatch(handlePopularMovies(data));
      })
      .catch((err) => console.log(err));

    fetchGenres()
      .then((data) => {
        setGenres(data);
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <St.HomeContainer>
      <St.Navbar>
        {genres &&
          genres.map((movieGenre) => (
            <Genres key={movieGenre.id} genre={movieGenre} />
          ))}
      </St.Navbar>

      {movies.genre.id === 0 ? <MoviesHome /> : <MoviesGenre />}
    </St.HomeContainer>
  );
}
