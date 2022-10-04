import { useEffect, useState } from 'react';
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
  const [MovieDetails, setMovieDetails] = useState(null);
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
      {MovieDetails && (
        <MovieDetailsSection>
          <GoBackButton to={location.state?.from ?? '/'}>
            {' '}
            &#10232; Go back
          </GoBackButton>
          <MovieDetailsContainer>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${MovieDetails.poster_path}`}
                alt={MovieDetails.original_title}
                width={650}
              />
            </div>
            <MovieDetailsInfo>
              <MovieDetailsInfoTittle>
                {MovieDetails.original_title} ({' '}
                {dateRelise.getFullYear(MovieDetails.release_date)} )
              </MovieDetailsInfoTittle>
              <p>User Score: {Math.round(MovieDetails.vote_average * 10)}%</p>
              <MovieDetailsInfoOverviewTittle>
                Overview
              </MovieDetailsInfoOverviewTittle>
              <p>{MovieDetails.overview}</p>
              <MovieDetailsInfoGenresTittle>
                Genres
              </MovieDetailsInfoGenresTittle>
              <p>{MovieDetails.genres.map(ganre => ganre.name).join(', ')}</p>
            </MovieDetailsInfo>
          </MovieDetailsContainer>
          <MovieAdditionalInfo>
            <p>Additional Information</p>
            <MovieAdditionalInfoList>
              <li>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
              <li>
                {' '}
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
              </li>
            </MovieAdditionalInfoList>
          </MovieAdditionalInfo>
          <Outlet />
        </MovieDetailsSection>
      )}
    </>
  );
};
export default MovieDetails;
