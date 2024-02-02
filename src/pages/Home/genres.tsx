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
import { IGenre } from "../../redux/reducers/movies/types";
import { SetStateFunction } from "../../types";
import * as St from "./styles";

type Props = {
  isSelected: boolean;
  genre: IGenre;
  setGenre: SetStateFunction<IGenre>;
};

export default function Genres({ genre, setGenre, isSelected }: Props) {
  let icon;

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
    <St.Genre isSelected={isSelected} onClick={() => setGenre(genre)}>
      {icon}
      <p>{genre.name}</p>
    </St.Genre>
  );
}
