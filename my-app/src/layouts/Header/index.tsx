import { BiSearchAlt2 } from "react-icons/bi";
import Fab from "@mui/material/Fab";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Logo from "../../assets/logo.png";
import { fetchSearchMovies } from "../../pages/Search/search";
import { AppDispatch } from "../../redux/store";
import {
  handleSearchMovies,
  resetGenresState,
} from "../../redux/reducers/movies/reducers";
import * as St from "./styles";

export default function Header() {
  const { pathname } = useLocation();
  const [movieSearch, setMovieSearch] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const searchMovie = () => {
    if (movieSearch !== "") {
      const string = movieSearch.trim().toLowerCase();
      fetchSearchMovies(string, 1)
        .then((data) => {
          const payload = {
            string,
            searchedMovies: data.results,
            page: 1,
            totalPages: data.total_pages,
          };
          dispatch(handleSearchMovies(payload));
        })
        .catch((err) => console.log(err));
      setMovieSearch("");
      navigate("/search");
    }
  };

  const handleGoHome = () => {
    dispatch(resetGenresState());
    navigate("/home");
  };

  return (
    <St.Container>
      <St.Logo onClick={handleGoHome} src={Logo} alt="Logo" />
      {pathname !== "/" && (
        <St.Search>
          <St.Input
            placeholder="Busca por filmes"
            value={movieSearch}
            onChange={(e) => setMovieSearch(e.target.value)}
            onKeyDown={(e) => {
              e.key === "Enter" && searchMovie();
            }}
          />
          <Fab onClick={searchMovie} aria-label="search">
            <BiSearchAlt2 style={{ fontSize: "2rem" }} />
          </Fab>
        </St.Search>
      )}
    </St.Container>
  );
}
