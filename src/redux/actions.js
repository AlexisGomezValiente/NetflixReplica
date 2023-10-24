const GET_MOVIES = "GET_MOVIES";
const getMovies = () => {
  return function (dispatch) {
    const KEY = "93c539d040456c65fdbf33658e45b1cb";
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: GET_MOVIES, payload: data.results }));
  };
};

const MODAL = "MODAL";
const modal = (id) => {
  return { type: MODAL, payload: id };
};

const MOVIE_TRAILER = "MOVIE_TRAILER";
const movieTrailer = (id) => {
  return function (dispatch) {
    const KEY = "93c539d040456c65fdbf33658e45b1cb";
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&append_to_response=videos`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.videos.results) {
          const results = data.videos;
          dispatch({ type: MOVIE_TRAILER, payload: results });
        }
      });
  };
};

export { GET_MOVIES, getMovies, MODAL, modal, MOVIE_TRAILER, movieTrailer };
