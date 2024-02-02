import CardMovie from "../../components/cardMovie";
import { IMovie } from "../../redux/reducers/movies/types";
import * as St from "./styles";

type Props = {
  movies: IMovie[];
};

export default function MoviesList({ movies }: Props) {
  console.log({ movies });
  return (
    <St.Movies>
      {movies.map((movie) => {
        return <CardMovie key={movie.id} movie={movie} />;
      })}
    </St.Movies>
  );
}
