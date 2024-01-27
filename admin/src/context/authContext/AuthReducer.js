const AuthReducer = (state, action) => {
  switch (action.type) {
    case "login Start":
      return {
        user: null,
        isFetching: true,
        error: false,
      };

    case "login Success":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };

    case "login Failure":
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case "logout":
      return {
        user: null,
        isFetching: false,
        error: false,
      };

    default:
      return { ...state };
  }
};

export default AuthReducer;
