import { PayloadAction } from "@reduxjs/toolkit";
import { ISpotifyState, IUser } from "./types";

export const handleLoginAction = (
  state: ISpotifyState,
  action: PayloadAction<IUser>,
) => {
  state.user = action.payload;
};
