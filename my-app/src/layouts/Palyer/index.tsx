/* eslint-disable prefer-const */
import { useSelector } from "react-redux";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import {
  getListSoundtrack,
  getSoundtrackByID,
} from "../../services/spotify/SpotifyService";
import { RootState } from "../../redux/store";
import * as St from "./styles";
import { IPlayList } from "./types";
import PlayList from "./playList";

interface IProps {
  movieName: string;
}

export default function Player({ movieName }: IProps) {
  const spotify = useSelector((state: RootState) => state.spotify);
  const [moviePlayList, setMoviePlayList] = useState<IPlayList>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  const renderList = () => {
    if (isLoading) return <CircularProgress sx={{ width: 100 }} />;
    if (!isLoading && moviePlayList)
      return <PlayList playList={moviePlayList} />;
    return <p>Infelizmente não encontramos uma playlist</p>;
  };

  useMemo(() => {
    setIsLoading(true);
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
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <St.Container>{renderList()}</St.Container>;
}
