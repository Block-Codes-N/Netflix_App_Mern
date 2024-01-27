export const loginStart = () =>({
    type: "login Start",
});

export const loginSuccess = (user) =>({
    type: "login Success",
    payload: user,
});

export const loginFailure = () =>({
    type: "login Failure",
});

//logouts

export const logout = () => ({
    type: "logout",
});