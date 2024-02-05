import axios from "axios";

export const MoviesApi = () => {
  return axios.create({
    baseURL: "https://api.themoviedb.org/3",
  });
};
