import {
  Gi3DGlasses,
  GiAfrica,
  GiAllSeeingEye,
  GiArrest,
  GiChainedHeart,
  GiChewedSkull,
  GiClown,
  GiCowboyBoot,
  GiDespair,
  GiFalloutShelter,
  GiFilmSpool,
  GiGps,
  GiKnightBanner,
  GiMightyForce,
  GiSpectre,
  GiSpiderMask,
  GiStoneTower,
  GiTank,
  GiWyvern,
  GiZigzagTune,
} from "react-icons/gi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IGenre } from "../../redux/reducers/movies/types";
import { RootState } from "../../redux/store";
import { handleGenresMovies } from "../../redux/reducers/movies/reducers";
import { fetchGenreMovies } from "../../layouts/MoviesGenre/genre";
import * as St from "./styles";

type Props = {
  genre: IGenre;
};

export default function Genres({ genre }: Props) {
  const dispatch = useDispatch();
  const { movies } = useSelector((state: RootState) => state);
  let icon;

  const handleGenre = () => {
    fetchGenreMovies(genre.id, 1)
      .then((data) => {
        const payload = {
          name: genre.name,
          id: genre.id,
          genreMovies: data.results,
          page: 1,
          totalPages: data.total_pages,
        };
        dispatch(handleGenresMovies(payload));
      })
      .catch((err) => console.log(err));
  };

  switch (genre.name) {
    case "Ação":
      icon = <GiMightyForce />;
      break;

    case "Documentário":
      icon = <GiAfrica />;
      break;

    case "Fantasia":
      icon = <GiWyvern />;
      break;

    case "História":
      icon = <GiKnightBanner />;
      break;

    case "Ficção científica":
      icon = <GiFalloutShelter />;
      break;

    case "Guerra":
      icon = <GiTank />;
      break;

    case "Mistério":
      icon = <GiAllSeeingEye />;
      break;

    case "Animação":
      icon = <GiSpiderMask />;
      break;

    case "Crime":
      icon = <GiArrest />;
      break;

    case "Aventura":
      icon = <GiStoneTower />;
      break;

    case "Terror":
      icon = <GiSpectre />;
      break;

    case "Faroeste":
      icon = <GiCowboyBoot />;
      break;

    case "Romance":
      icon = <GiChainedHeart />;
      break;

    case "Comédia":
      icon = <GiClown />;
      break;

    case "Thriller":
      icon = <GiChewedSkull />;
      break;

    case "Drama":
      icon = <GiDespair />;
      break;

    case "Música":
      icon = <GiZigzagTune />;
      break;

    case "Família":
      icon = <Gi3DGlasses />;
      break;

    case "Cinema TV":
      icon = <GiGps />;
      break;

    default:
      icon = <GiFilmSpool />;
      break;
  }

  return (
    <St.Genre
      isSelected={movies.genre.id === genre.id}
      onClick={() => handleGenre()}
    >
      {icon}
      <p>{genre.name}</p>
    </St.Genre>
  );
}
