import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from 'api/fetchApi';

import NoImage from 'components/img/no-img.png';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCast(movieId);
  }, [movieId]);

  const fetchCast = async movieId => {
    try {
      setLoading(true);
      const dataCast = await fetchMoviesCredits(movieId);
      setCast(dataCast);
    } catch (error) {
      setError('Ooops. Something went wrong...');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && 'Loading...'}
      {error && <div>{error}</div>}
      <ul>
        {cast.map(castItem => {
          return (
            <li key={castItem.id}>
              <img
                src={
                  castItem.profile_path
                    ? `https://image.tmdb.org/t/p/w200${castItem.profile_path}`
                    : NoImage
                }
                alt={`${castItem.name} portrait`}
              />
              <div>
                <p>Name: {castItem.name}</p>
                <p>Character: {castItem.character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
