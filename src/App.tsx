import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './globalStyle'
import Search from './pages/Search'
import Home from './pages/Home'
import Movie from './pages/Movie'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
          <Routes>
            <Route path="/search" element={<Search />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}
