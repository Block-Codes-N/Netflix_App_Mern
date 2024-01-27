export const getMoviesStart = () =>({
    type: "Get Movies Start",
});

export const getMoviesSuccess = () =>({
    type: "Get Movies Success",
    payload: movies,
});

export const getMoviesFailure = () =>({
    type: "Get Movies Failure",
});