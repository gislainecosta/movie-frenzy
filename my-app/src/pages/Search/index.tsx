import { IoArrowUndoSharp } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import MoviesList from "../../shared/components/MoviesList";
import { AppDispatch, RootState } from "../../redux/store";
import {
  handleSearchPageMovies,
  resetGenresState,
} from "../../redux/reducers/movies/reducers";
import * as St from "./styles";
import { fetchSearchMovies } from "./search";

export default function Search() {
  const [pageTitle, setPageTitle] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const movies = useSelector((state: RootState) => state.movies);
  const search = movies.search;

  useEffect(() => {
    let message = "";
    search.searchedMovies.length === 0
      ? (message = "Não foram encontrados")
      : (message = "Exibindo");
    setPageTitle(`${message} resultados para: ${search.string}`);
  }, [search.searchedMovies.length, search.string]);

  const handlePage = (page: number) => {
    fetchSearchMovies(search.string, page)
      .then((data) => {
        const payload = {
          searchedMovies: data.results,
          page,
        };
        dispatch(handleSearchPageMovies(payload));
      })
      .catch((err) => console.log(err));
  };

  const handleGoHome = () => {
    dispatch(resetGenresState());
    navigate("/home");
  };

  return (
    <St.Container>
      <St.PageTitle>
        <IoArrowUndoSharp
          style={{ cursor: "pointer" }}
          onClick={handleGoHome}
        />
        <span>{pageTitle}</span>
      </St.PageTitle>
      <MoviesList movies={search.searchedMovies} />
      {search.searchedMovies.length !== 0 && (
        <Pagination
          showFirstButton
          showLastButton
          color="primary"
          variant="outlined"
          count={search.totalPages}
          onChange={(_, value) => handlePage(value)}
        />
      )}
    </St.Container>
  );
}
