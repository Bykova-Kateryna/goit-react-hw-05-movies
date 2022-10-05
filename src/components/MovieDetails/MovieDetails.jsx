import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  GoBackButton,
  MovieDetailsSection,
  MovieDetailsContainer,
  MovieDetailsInfo,
  MovieDetailsInfoTittle,
  MovieDetailsInfoOverviewTittle,
  MovieDetailsInfoGenresTittle,
  MovieAdditionalInfo,
  MovieAdditionalInfoList,
} from './MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';

const URL = 'https://api.themoviedb.org/3/';
const API_KEY = '2aeb67ea92a5fcd35004195f81b34bb6';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const dateRelise = new Date();

  useEffect(() => {
    setLoading(true);
    fetch(`${URL}movie/${movieId}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setMovieDetails(data), setLoading(false));
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {movieDetails && (
        <MovieDetailsSection>
          <GoBackButton to={location.state?.from ?? '/'}>
            {' '}
            &#10232; Go back
          </GoBackButton>
          <MovieDetailsContainer>
            <div>
              <img
                src={
                  movieDetails.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                    : `https://i.kym-cdn.com/photos/images/original/002/020/910/1b5.jpg`
                }
                alt={movieDetails.original_title}
                width={600}
              />
            </div>
            <MovieDetailsInfo>
              <MovieDetailsInfoTittle>
                {movieDetails.original_title} ({' '}
                {dateRelise.getFullYear(movieDetails.release_date)} )
              </MovieDetailsInfoTittle>
              <p>User Score: {Math.round(movieDetails.vote_average * 10)}%</p>
              <MovieDetailsInfoOverviewTittle>
                Overview
              </MovieDetailsInfoOverviewTittle>
              <p>
                {movieDetails.overview !== ''
                  ? movieDetails.overview
                  : 'There are no reviews'}
              </p>
              <MovieDetailsInfoGenresTittle>
                Genres
              </MovieDetailsInfoGenresTittle>
              <p>{movieDetails.genres.map(ganre => ganre.name).join(', ')}</p>
            </MovieDetailsInfo>
          </MovieDetailsContainer>
          <MovieAdditionalInfo>
            <p>Additional Information</p>
            <MovieAdditionalInfoList>
              <li>
                <Link
                  to={`/movies/${movieId}/cast`}
                  state={{ from: location.state.from }}
                >
                  Cast
                </Link>
              </li>
              <li>
                {' '}
                <Link
                  to={`/movies/${movieId}/reviews`}
                  state={{ from: location.state.from }}
                >
                  Reviews
                </Link>
              </li>
            </MovieAdditionalInfoList>
          </MovieAdditionalInfo>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </MovieDetailsSection>
      )}
    </>
  );
};
export default MovieDetails;
