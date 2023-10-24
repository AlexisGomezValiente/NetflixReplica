import { GET_MOVIES, MODAL, MOVIE_TRAILER } from "./actions";

const initialState = {
  movies: [],
  movieModal: {},
  movieTrailer: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload };
    case MODAL:
      const movie = state.movies.filter((movie) => movie.id == action.payload);
      return { ...state, movieModal: movie[0] };
    case MOVIE_TRAILER:
      const videos = action.payload;
      const trailer = videos.results.find(video => video.type == 'Trailer' && video.official);
      console.log(trailer)
      return {...state, movieTrailer: trailer }
    default:
      return { ...state };
  }
};

export default rootReducer;
