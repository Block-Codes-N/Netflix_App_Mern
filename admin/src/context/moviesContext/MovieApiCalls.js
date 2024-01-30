import axios from "axios";
import { deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MovieActions";

export const getMovies = async(dispatch) => {
    dispatch(getMoviesStart());
    try {
      
        // const res = await axios.get("movies", { headers: { token: "Bearer  " + JSON.parse(localStorage.getItem("user")).accessToken, } });
        // dispatch(getMoviesSuccess(res.data));

        const res = await axios.get("movies", { headers: { token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjdjMGZlN2IyYTkzMjYxZDcwYWIyYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjU0MTQ2OCwiZXhwIjoxNzA2OTczNDY4fQ.om-kO0K7F-Q5YnUeNBVHjwPBSnbsgVCk9MYDB2qtvVQ"} });
        dispatch(getMoviesSuccess(res.data));

    } catch (err) {
        dispatch(getMoviesFailure());
    }
}

//DELETE
export const deleteMovie = async(id,dispatch) => {
    dispatch(deleteMovieStart());
    try {
      
        // const res = await axios.delete("movies/"+id, { headers: { token: "Bearer  " + JSON.parse(localStorage.getItem("user")).accessToken, } });
        // dispatch(getMoviesSuccess(res.data));

        await axios.delete("movies/"+id, { headers: { token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjdjMGZlN2IyYTkzMjYxZDcwYWIyYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjU0MTQ2OCwiZXhwIjoxNzA2OTczNDY4fQ.om-kO0K7F-Q5YnUeNBVHjwPBSnbsgVCk9MYDB2qtvVQ"} });
        dispatch(deleteMovieSuccess(id));

    } catch (err) {
        dispatch(deleteMovieFailure());
    }
}