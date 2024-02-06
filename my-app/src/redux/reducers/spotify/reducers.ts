import { createSlice } from "@reduxjs/toolkit";
import { handleLoginAction } from "./actions";
import { ISpotifyState } from "./types";

const initialState: ISpotifyState = {
  user: {
    access_token: "",
    refresh_token: "",
  },
};

export const spotifySlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    handleLogin: handleLoginAction,
  },
});

export const { handleLogin } = spotifySlice.actions;
