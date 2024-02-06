import { IoArrowUndoSharp } from "react-icons/io5";
import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";
import MoviesList from "../../shared/components/MoviesList";
import { AppDispatch, RootState } from "../../redux/store";
import { handleGenrePageMovies } from "../../redux/reducers/movies/reducers";
import * as St from "./styles";
import { fetchGenreMovies } from "./genre";

export default function MoviesGenre() {
  const movies = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch<AppDispatch>();
  const moviesGenre = movies.genre;

  const handlePage = (page: number) => {
    fetchGenreMovies(moviesGenre.id, page)
      .then((data) => {
        const payload = {
          genreMovies: data.results,
          page,
        };
        dispatch(handleGenrePageMovies(payload));
      })
      .catch((err) => console.log(err));
  };

  return (
    <St.MoviesGrid>
      <St.PageTitle>
        <IoArrowUndoSharp style={{ cursor: "pointer" }} />
        <span>Filtrado por: {moviesGenre.name}</span>
      </St.PageTitle>
      <MoviesList movies={moviesGenre.genreMovies} />
      <Pagination
        showFirstButton
        showLastButton
        color="primary"
        variant="outlined"
        count={moviesGenre.totalPages}
        onChange={(_, value) => handlePage(value)}
      />
    </St.MoviesGrid>
  );
}
