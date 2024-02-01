
//Get the movies
export const getListsStart = () =>({
  type: "Get Lists Start",
});

export const getListsSuccess = (lists) =>({
  type: "Get Lists Success",
  payload: lists,
});

export const getListsFailure = () =>({
  type: "Get Lists Failure",
});


// //Create a movie
// export const createMovieStart = () =>({
//   type: "Create Movie Start",
// });

// export const createMovieSuccess = (movie) =>({
//   type: "Create Movie Success",
//   payload: movie,
// });

// export const createMovieFailure = () =>({
//   type: "Create Movie Failure",
// });


// //Update a movie
// export const updateMovieStart = () =>({
//   type: "Update Movie Start",
// });

// export const updateMovieSuccess = (movie) =>({
//   type: "Update Movie Success",
//   payload: movie,
// });

// export const updateMovieFailure = () =>({
//   type: "Update Movie Failure",
// });


// //Delete a movie
// export const deleteMovieStart = () =>({
//   type: "Delete Movie Start",
// });

// export const deleteMovieSuccess = (id) =>({
//   type: "Delete Movie Success",
//   payload: id,
// });

// export const deleteMovieFailure = () =>({
//   type: "Delete Movie Failure",
// });
