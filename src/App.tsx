import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "./shared/themes/MUI";
import { GlobalStyle } from "./shared/themes/globalStyle";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import store from "./redux/store";
import Header from "./layouts/Header";

export default function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/search" element={<Search />} />
            <Route path="movie/:id" element={<Movie />} />
            <Route path="/" element={<Home />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}
