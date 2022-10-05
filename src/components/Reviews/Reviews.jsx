import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ReviewsSection,
  ReviewsItem,
  ReviewsItemTittle,
  ReviewsItemDescription,
} from './Reviews.styled';

const URL = 'https://api.themoviedb.org/3/';
const API_KEY = '2aeb67ea92a5fcd35004195f81b34bb6';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(`${URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`)
      .then(response => response.json())
      .then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <>
      {reviews.length !== 0 ? (
        <ReviewsSection>
          <ul>
            {reviews.map(review => (
              <ReviewsItem key={review.id}>
                <ReviewsItemTittle>{review.author}</ReviewsItemTittle>
                <ReviewsItemDescription>{review.content}</ReviewsItemDescription>
              </ReviewsItem>
            ))}
          </ul>
        </ReviewsSection>
      ) : (
        <ReviewsSection>
          <p>We don't have any reviews for this movie.</p>
        </ReviewsSection>
      )}
    </>
  );
};

export default Reviews;
