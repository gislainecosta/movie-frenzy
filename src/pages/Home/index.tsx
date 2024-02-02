import { useState } from "react";
import PopularMovies from "../../layouts/PopularMovies";
import GenreMovies from "../../layouts/GenreMovies";
import { IGenre } from "../../redux/reducers/movies/types";
import * as St from "./styles";
import Genres from "./genres";

export default function Home() {
  const [genre, setGenre] = useState<IGenre>({
    id: 0,
    name: "",
  });

  const listGenres = [
    {
      id: 28,
      name: "Ação",
    },
    {
      id: 12,
      name: "Aventura",
    },
    {
      id: 16,
      name: "Animação",
    },
    {
      id: 35,
      name: "Comédia",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentário",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Família",
    },
    {
      id: 14,
      name: "Fantasia",
    },
    {
      id: 36,
      name: "História",
    },
    {
      id: 27,
      name: "Terror",
    },
    {
      id: 10402,
      name: "Música",
    },
    {
      id: 9648,
      name: "Mistério",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Ficção científica",
    },
    {
      id: 10770,
      name: "Cinema TV",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "Guerra",
    },
    {
      id: 37,
      name: "Faroeste",
    },
  ];

  return (
    <St.HomeContainer>
      <St.Navbar>
        <St.NavTitle>GÊNEROS</St.NavTitle>
        <St.ListGenres>
          {listGenres.map((movieGenre) => (
            <Genres
              key={movieGenre.id}
              genre={movieGenre}
              setGenre={setGenre}
              isSelected={movieGenre.name === genre.name}
            />
          ))}
        </St.ListGenres>
      </St.Navbar>
      {genre.id === 0 ? <PopularMovies /> : <GenreMovies genre={genre} />}
    </St.HomeContainer>
  );
}
