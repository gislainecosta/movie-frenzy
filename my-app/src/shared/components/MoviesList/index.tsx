import { IListMovie } from "../../../redux/reducers/movies/types";
import CardMovie from "../cardMovie";
import * as St from "./styles";

type Props = {
  movies: IListMovie[];
};

export default function MoviesList({ movies }: Props) {
  return (
    <St.Movies>
      {movies.map((movie) => {
        return <CardMovie key={movie.id} movie={movie} />;
      })}
    </St.Movies>
  );
}
