/* eslint-disable prefer-const */
import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import {
  getListSoundtrack,
  getSoundtrackByID,
} from "../../services/spotify/SpotifyService";
import { RootState } from "../../redux/store";
import * as St from "./styles";
import { IPlayList } from "./types";

interface IProps {
  movieName: string;
}

export default function Player({ movieName }: IProps) {
  const spotify = useSelector((state: RootState) => state.spotify);
  const [moviePlayList, setMoviePlayList] = useState<IPlayList>();
  const isLogged = !!spotify.user.access_token;

  const fetchGetMoviePlayLists = async () => {
    const response = await getListSoundtrack(
      spotify.user.access_token,
      movieName,
    );
    return response.data.playlists;
  };

  const fetchGetPlayList = async (id: number) => {
    const response = await getSoundtrackByID(spotify.user.access_token, id);
    return response.data;
  };

  useMemo(() => {
    fetchGetMoviePlayLists()
      .then((data) => {
        const playList = data.items.filter((it: IPlayList) =>
          it.name.includes("Soundtrack"),
        );
        fetchGetPlayList(playList[0].id)
          .then((list) => {
            setMoviePlayList(list);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <St.Container>
      {isLogged && moviePlayList ? (
        <>{moviePlayList.name}</>
      ) : (
        <p>Por favor, faça Login no Spotify</p>
      )}
    </St.Container>
  );
}
