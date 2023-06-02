import { useEffect, useState } from 'react';
import { getMovies } from 'api/fetchApi';
import MoviesList from 'page/MoviesList/MoviesList'

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    try {
      setLoading(true);
      const data = await getMovies();
      setMovies(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <h1>Trending Today</h1>
        {loading && 'Loading ...'}
        {movies && <MoviesList movies={movies} />}
        {error && <p>Something went wrong. Try later</p>}
      </div>
    </>
  );
}
export default HomePage;
