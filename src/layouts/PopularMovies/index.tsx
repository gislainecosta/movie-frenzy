import { IMovie } from "../../redux/reducers/movies/types";
import * as St from "./styles";

type Props = {
  popularMovies: IMovie[];
  lastMovies: IMovie[];
};

export default function PopularMovies({ popularMovies, lastMovies }: Props) {
  console.log({ popularMovies, lastMovies });
  return <St.Container></St.Container>;
}
