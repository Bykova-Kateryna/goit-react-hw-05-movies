import { Suspense, useState } from 'react';
import { Link, useLocation, useSearchParams, Outlet } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import {
  SearchMovieForm,
  SearchMovieBtn,
  SearchMovieInput,
} from './Movies.styled';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';

const URL = 'https://api.themoviedb.org/3/';
const API_KEY = '2aeb67ea92a5fcd35004195f81b34bb6';

const Movies = () => {
  const [searchesMovies, setSearchesMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const search = searchQuery.get('query') ?? '';
  const [searchInput, setSearchInput] = useState(search);
  const location = useLocation();

  useEffect(() => {
    if (search !== '') {
      setLoading(true);
      fetch(
        `${URL}search/movie?api_key=${API_KEY}&query=${search}&language=en-US`
      )
        .then(response => response.json())
        .then(data => {
          if (data.total_results === 0) {
            Report.info(
              `${search} not found.`,
              'Please enter another movie.',
              'Okay'
            );
            return;
          }
          setSearchesMovies(data.results);
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [search]);

  const handleChange = event => {
    setSearchInput(event.currentTarget.value);
  };

  const handleSubmitSearchInfo = event => {
    event.preventDefault();
    setSearchQuery({ query: event.target.children.search.value });
    if (event.target.children.search.value.trim() === '') {
      Notify.failure('Please enter the search field.');
      return;
    }
  };

  return (
    <>
      <SearchMovieForm onSubmit={handleSubmitSearchInfo}>
        <SearchMovieInput
          type="text"
          name="search"
          autocomplete="off"
          autoFocus
          onChange={handleChange}
          value={searchInput}
        />
        <SearchMovieBtn type="submit">Search</SearchMovieBtn>
      </SearchMovieForm>

      {loading && <Loader />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      <section>
        <ul>
          {searchesMovies &&
            searchesMovies.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.original_title}
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};

export default Movies;
