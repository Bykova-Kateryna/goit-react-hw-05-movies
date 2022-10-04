import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastSection, CastItem, CastDescription } from './Cast.styled';
const URL = 'https://api.themoviedb.org/3/';
const API_KEY = '2aeb67ea92a5fcd35004195f81b34bb6';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(`${URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
      .then(response => response.json())
      .then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <>
      {cast && (
        <CastSection>
          <ul>
            {cast.map(info => (
              <CastItem key={info.id}>
                <img
                  src={
                    info.profile_path
                      ? `https://image.tmdb.org/t/p/w500${info.profile_path}`
                      : `https://i.kym-cdn.com/photos/images/original/002/020/910/1b5.jpg`
                  }
                  alt={info.name}
                  width={100}
                />
                <CastDescription>{info.name}</CastDescription>
                <CastDescription>Character: {info.character}</CastDescription>
              </CastItem>
            ))}
          </ul>
        </CastSection>
      )}
    </>
  );
};

export default Cast;
