import { SpotifyApi } from "./../APiConfig";

export const getListSoundtrack = async (token: string, movie: string) => {
  console.log({ token });
  return SpotifyApi().get(`search?q=${movie}&type=playlist`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const getSoundtrackByID = async (token: string, id: number) => {
  console.log({ token });
  return SpotifyApi().get(`https://api.spotify.com/v1/playlists/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};
