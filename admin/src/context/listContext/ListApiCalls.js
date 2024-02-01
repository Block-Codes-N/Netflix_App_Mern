import axios from "axios";
import { getListsFailure, getListsStart, getListsSuccess } from "../listContext/ListActions";

//GETMOVIES
export const getLists = async(dispatch) => {
    dispatch(getListsStart());
    try {
      
        // const res = await axios.get("movies", { headers: { token: "Bearer  " + JSON.parse(localStorage.getItem("user")).accessToken, } });
        // dispatch(getMoviesSuccess(res.data));

        const res = await axios.get("lists", { headers: { token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjdjMGZlN2IyYTkzMjYxZDcwYWIyYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjU0MTQ2OCwiZXhwIjoxNzA2OTczNDY4fQ.om-kO0K7F-Q5YnUeNBVHjwPBSnbsgVCk9MYDB2qtvVQ"} });
        dispatch(getListsSuccess(res.data));

    } catch (err) {
        dispatch(getListsFailure());
    }
}


// //CREATEMOVIE
// export const createMovie = async(movie, dispatch) => {
//     dispatch(createMovieStart());
//     try {

//         const res = await axios.post("movies", movie, { headers: { token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjdjMGZlN2IyYTkzMjYxZDcwYWIyYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjU0MTQ2OCwiZXhwIjoxNzA2OTczNDY4fQ.om-kO0K7F-Q5YnUeNBVHjwPBSnbsgVCk9MYDB2qtvVQ"} });
//         dispatch(createMovieSuccess(res.data));

//     } catch (err) {
//         dispatch(createMovieFailure());
//     }
// }

// //DELETE
// export const deleteMovie = async(id,dispatch) => {
//     dispatch(deleteMovieStart());
//     try {
      
//         // const res = await axios.delete("movies/"+id, { headers: { token: "Bearer  " + JSON.parse(localStorage.getItem("user")).accessToken, } });
//         // dispatch(getMoviesSuccess(res.data));

//         await axios.delete("movies/"+id, { headers: { token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YjdjMGZlN2IyYTkzMjYxZDcwYWIyYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjU0MTQ2OCwiZXhwIjoxNzA2OTczNDY4fQ.om-kO0K7F-Q5YnUeNBVHjwPBSnbsgVCk9MYDB2qtvVQ"} });
//         dispatch(deleteMovieSuccess(id));

//     } catch (err) {
//         dispatch(deleteMovieFailure());
//     }
// }