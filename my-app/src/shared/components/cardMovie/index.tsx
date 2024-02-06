import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import Tooltip from "@mui/material/Tooltip";
import { IListMovie } from "../../../redux/reducers/movies/types";
import { handleLatestMovies } from "../../../redux/reducers/movies/reducers";
import DefaultImg from "../../../assets/error.jpg";
import * as St from "./styles";

type Props = {
  movie: IListMovie;
};

export default function CardMovie({ movie }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToMovie = () => {
    navigate(`movie/${movie.id}`);
    dispatch(handleLatestMovies(movie));
  };

  return (
    <St.Container>
      <St.Poster
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : DefaultImg
        }
      />
      <Tooltip title={movie.title} arrow placement="top">
        <St.Title>{movie.title}</St.Title>
      </Tooltip>
      <p>{movie.release_date.substring(0, 4)}</p>
      <Button onClick={goToMovie}>+ Detalhes</Button>
    </St.Container>
  );
}
