
import {useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

import { fetchMoviesDetails } from 'api/fetchApi';
import BackLink from 'components/BackLink/BackLink'

import NoImage from 'components/img/no-img.png' 


function DetailsMoviePage() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

    const getYear = () => new Date(movie.release_date).getFullYear(); 
    
    
    useEffect(() => {
    getDetailsMovie(movieId);
  }, [movieId]);

  const getDetailsMovie = async (movieId) => {
    try {
      setLoading(true);
      const data = await fetchMoviesDetails(movieId);
      setMovie(data);
     
    } catch {
      setError('Something went wrong...');
    } finally {
     setLoading(false);
    }
  }  
    

  return (
    <>
      <div>
        <BackLink to={backLinkHref}>Back</BackLink>
        
        {loading && 'Loading ...'}
        {error && <div>{error}</div>}
        {movie && (
          <div>
            <img
              src={ movie.poster_path ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : NoImage}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>({getYear()})</p>
            <p>User Score: {movie.popularity}</p>
            <div>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        )}
        
        <div>
                  <h2>Additional Information</h2>
                  <NavLink
            to={`/movies/${movieId}/cast`}
            
            state={location.state}
          >
            <p>Cast</p>
          </NavLink>
          <NavLink
            to={`/movies/${movieId}/reviews`}
           
            state={location.state}
          >
            <p>Reviews</p>
          </NavLink>

          <Outlet />
        </div>
      </div>
    </>
  );
}

export default DetailsMoviePage;