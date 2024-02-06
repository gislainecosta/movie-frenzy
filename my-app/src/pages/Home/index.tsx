import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { IGenre } from "../../redux/reducers/movies/types";
import { MoviesService } from "../../services/movies/MovieService";
import { AppDispatch, RootState } from "../../redux/store";
import { handlePopularMovies } from "../../redux/reducers/movies/reducers";
import MoviesHome from "../../layouts/MoviesHome";
import MoviesGenre from "../../layouts/MoviesGenre";
import { handleLogin } from "../../redux/reducers/spotify/reducers";
import Genres from "./genres";
import * as St from "./styles";

export default function Home() {
  const [genres, setGenres] = useState<IGenre[]>();
  const movies = useSelector((state: RootState) => state.movies);
  const spotify = useSelector((state: RootState) => state.spotify);
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  const getHashParams = (hash: string): Record<string, string> => {
    const params = new URLSearchParams(hash.slice(1));
    const hashParams: Record<string, string> = {};

    params.forEach((value, key) => {
      hashParams[key] = value;
    });

    return hashParams;
  };

  useEffect(() => {
    const hashParams = getHashParams(location.hash);
    const payload = {
      access_token: hashParams.access_token,
      refresh_token: hashParams.refresh_token,
    };

    dispatch(handleLogin(payload));
  }, [dispatch, location]);

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

  console.log({ spotify });

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
