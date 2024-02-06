import { useSelector } from "react-redux";
import MoviesList from "../../shared/components/MoviesList";
import { RootState } from "../../redux/store";
import * as St from "./styles";

export default function MoviesHome() {
  const movies = useSelector((state: RootState) => state.movies);
  return (
    <St.MoviesGrid>
      {movies.latestMovies.length !== 0 && (
        <div style={{ marginBottom: "4rem" }}>
          <St.PageTitle>Visto por último</St.PageTitle>
          <MoviesList movies={movies.latestMovies} />
        </div>
      )}

      <St.PageTitle>Filmes em destaque</St.PageTitle>
      <MoviesList movies={movies.popularMovies} />
    </St.MoviesGrid>
  );
}
