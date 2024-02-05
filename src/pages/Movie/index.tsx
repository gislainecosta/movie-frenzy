import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { MdStar } from "react-icons/md";
import { IoArrowUndoSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { MoviesService } from "../../services/movies/MovieService";
import * as St from "./styles";
import { IMovie } from "./types";

export default function Movie() {
  const [movie, setMovie] = useState<IMovie>();
  const [movieNote, setMovieNote] = useState<number>(0);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchMovie = async () => {
    const movieId = Number(id);
    const response = await MoviesService.getMovieById(movieId);
    return response.data;
  };

  useEffect(() => {
    fetchMovie()
      .then((data) => {
        setMovieNote(data.vote_average / 2);
        setMovie(data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <St.Container>
      <IoArrowUndoSharp
        style={{ cursor: "pointer", fontSize: 24 }}
        onClick={() => navigate(-1)}
      />
      <St.Movie>
        <St.Poster
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
        />
        <St.Details>
          <St.Title>{movie?.title}</St.Title>
          <p>{movie?.tagline}</p>
          <p>(Título original: {movie?.original_title})</p>
          <St.Info>
            <p>{movie?.release_date.substring(0, 4)}&nbsp;</p>
            <p>| {movie?.runtime} minutos&nbsp;</p>
            {movie &&
              movie.genres.map((genre) => {
                return <p key={genre.id}>| {genre.name}&nbsp;</p>;
              })}
          </St.Info>
          <Stack>
            <Rating
              name="half-rating-read"
              value={movieNote}
              precision={0.1}
              readOnly
              emptyIcon={<MdStar />}
            />
          </Stack>
          <St.Description>{movie?.overview}</St.Description>
        </St.Details>
        <St.Player>
          <p>Trilha Sonora</p>
        </St.Player>
      </St.Movie>
    </St.Container>
  );
}
