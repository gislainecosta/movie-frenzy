import { BsFillStarFill } from "react-icons/bs";
import { IMovie } from "../../redux/reducers/movies/types";
import * as St from "./styles";

type Props = {
  movie: IMovie;
};

export default function CardMovie({ movie }: Props) {
  console.log(movie);
  return (
    <St.Container>
      <St.Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      <St.Title>{movie.title}</St.Title>
      <St.Range>
        <BsFillStarFill style={{ color: "yellow" }} />
        <span>{movie.vote_average}</span>
      </St.Range>
      <St.Button>+ Detalhes</St.Button>
    </St.Container>
  );
}
