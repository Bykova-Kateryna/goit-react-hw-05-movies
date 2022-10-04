import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { HomeSection, HomeTittle, HomeList } from './Home.styled';
const URL = 'https://api.themoviedb.org/3/';
const API_KEY = '2aeb67ea92a5fcd35004195f81b34bb6';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    fetch(`${URL}trending/movie/week?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(movies => setTrendingMovies(movies.results), setLoading(false));
  }, []);

  return (
    <>
      {loading && <Loader />}
      <HomeSection>
        <HomeTittle>Trending today</HomeTittle>
        <ul>
          {trendingMovies &&
            trendingMovies.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.original_title}
                </Link>
              </li>
            ))}
        </ul>
      </HomeSection>
    </>
  );
};
export default Home;
