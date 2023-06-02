import axios from 'axios';

const KEY = 'a67a3cc6cc773faaf2b2aedd9d60aa22';

export const getMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}&language=en-US`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesByQuery = async query => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}&language=en-US`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMoviesDetails = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMoviesCredits = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMoviesReviews = async id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US`
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
