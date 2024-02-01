const ListReducer = (state, action) => {
  switch (action.type) {

    // Get All Movies
    case "Get Lists Start":
      return {
        lists: [],
        isFetching: true,
        error: false,
      };

    case "Get Lists Success":
      return {
        lists: action.payload,
        isFetching: false,
        error: false,
      };

    case "Get Lists Failure":
      return {
        lists: [],
        isFetching: false,
        error: true,
      };

    //   //Create Movie
    //   case "Create Movie Start":
    //   return {
    //     ...state,
    //     isFetching: true,
    //     error: false,
    //   };

    // case "Create Movie Success":
    //   return {
    //     movies: [...state.movies, action.payload],
    //     isFetching: false,
    //     error: false,
    //   };

    // case "Create Movie Failure":
    //   return {
    //     ...state,
    //     isFetching: false,
    //     error: true,
    //   };

    //   // Update movie
    //   case "Update Movie Start":
    //   return {
    //     ...state,
    //     isFetching: true,
    //     error: false,
    //   };

    // case "Update Movie Success":
    //   return {
    //     movies: state.movies.map( (movie) =>  movie._id && action.payload),
    //     isFetching: false,
    //     error: false,
    //   };

    // case "Update Movie Failure":
    //   return {
    //     ...state,
    //     isFetching: false,
    //     error: true,
    //   };

    //   //Deleting a movie
    //   case "Delete Movie Start":
    //   return {
    //     ...state,
    //     isFetching: true,
    //     error: false,
    //   };

    // case "Delete Movie Success":
    //   return {
    //     movies: state.movies.filter((movie) => movie._id !== action.payload),
    //     isFetching: false,
    //     error: false,
    //   };

    // case "Delete Movie Failure":
    //   return {
    //     ...state,
    //     isFetching: false,
    //     error: true,
    //   };

    default:
      return { ...state };
  }
};

export default ListReducer;
