import { useNavigate } from "react-router-dom";
import { IListMovie } from "../../../redux/reducers/movies/types";
import * as St from "./styles";

type Props = {
  movie: IListMovie;
};

export default function CardMovie({ movie }: Props) {
  const navigate = useNavigate();
  console.log(movie);
  return (
    <St.Container>
      <St.Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      <St.Title>{movie.title}</St.Title>
      <p>{movie.release_date.substring(0, 4)}</p>
      <St.Button>+ Detalhes</St.Button>
    </St.Container>
  );
}
