import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react'
import { GlobalStyle } from './GlobalStyle';
const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Header  = lazy(() => import('./Header/Header'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews')); 
const NotFoundPage = lazy(() => import('./404Page/404Page'))

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}/>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="/movies/:movieId/cast" element={<Cast />} />
              <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            </Route>
          <Route path="*" element={<NotFoundPage/>}/>
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
