import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'api/fetchApi';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const res = await fetchMoviesReviews(movieId);
        setReviews(res);
      } catch (error) {
        setError(error);
      } finally {
     setLoading(false);
    }
    };
    fetchReviews();
  }, [movieId]);
    
  return (
    <>
      {error && <div>{error}</div>}
      {loading && 'Loading ...'}
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
        {reviews.length === 0 && <p>No reviews
</p>}
      </ul>
     
    </>
  );
};

export default Reviews;