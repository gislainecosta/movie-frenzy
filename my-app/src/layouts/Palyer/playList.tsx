import * as St from "./styles";
import { IPlayList } from "./types";

interface IProps {
  playList: IPlayList;
}

export default function PlayList({ playList }: IProps) {
  const tracks = playList.tracks.items;

  return (
    <St.Container>
      <St.Title>{playList.name}</St.Title>
      <St.Tracks>
        {tracks.map((track: any) => {
          return (
            <a
              key={track.track.id}
              href={track.track.preview_url}
              target="_blank"
              rel="noreferrer"
            >
              {track.track.name}
            </a>
          );
        })}
      </St.Tracks>
    </St.Container>
  );
}
