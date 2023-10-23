import { GET_MOVIES, MODAL } from "./actions";

const initialState = {
  movies: [],
  movieModal: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload };
    case MODAL:
      const movie = state.movies.filter((movie) => movie.id == action.payload);
      return { ...state, movieModal: movie[0] };
    default:
      return { ...state };
  }
};

export default rootReducer;
