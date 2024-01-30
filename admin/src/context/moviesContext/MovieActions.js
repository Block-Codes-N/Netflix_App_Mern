export const getMoviesStart = () =>({
  type: "Get Movies Start",
});

export const getMoviesSuccess = (movies) =>({
  type: "Get Movies Success",
  payload: movies,
});

export const getMoviesFailure = () =>({
  type: "Get Movies Failure",
});

export const deleteMovieStart = () =>({
  type: "Delete Movie Start",
});

export const deleteMovieSuccess = (id) =>({
  type: "Delete Movie Success",
  payload: id,
});

export const deleteMovieFailure = () =>({
  type: "Delete Movie Failure",
});
