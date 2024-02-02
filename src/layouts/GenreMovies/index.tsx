import { IGenre } from "../../redux/reducers/movies/types";
import * as St from "./styles";

type Props = {
  genre: IGenre;
};

export default function GenreMovies({ genre }: Props) {
  return (
    <St.Container>
      <p>Gênero: {genre.name}</p>
    </St.Container>
  );
}
