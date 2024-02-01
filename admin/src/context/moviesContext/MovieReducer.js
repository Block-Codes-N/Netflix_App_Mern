const MovieReducer = (state, action) => {
  switch (action.type) {

    // Get All Movies
    case "Get Movies Start":
      return {
        movies: [],
        isFetching: true,
        error: false,
      };

    case "Get Movies Success":
      return {
        movies: action.payload,
        isFetching: false,
        error: false,
      };

    case "Get Movies Failure":
      return {
        movies: [],
        isFetching: false,
        error: true,
      };

      //Create Movie
      case "Create Movie Start":
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case "Create Movie Success":
      return {
        movies: [...state.movies, action.payload],
        isFetching: false,
        error: false,
      };

    case "Create Movie Failure":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

      // Update movie
      case "Update Movie Start":
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case "Update Movie Success":
      return {
        movies: state.movies.map( (movie) =>  movie._id && action.payload),
        isFetching: false,
        error: false,
      };

    case "Update Movie Failure":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

      //Deleting a movie
      case "Delete Movie Start":
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case "Delete Movie Success":
      return {
        movies: state.movies.filter((movie) => movie._id !== action.payload),
        isFetching: false,
        error: false,
      };

    case "Delete Movie Failure":
      return {
        ...state,
        isFetching: false,
        error: true,
      };

    default:
      return { ...state };
  }
};

export default MovieReducer;
