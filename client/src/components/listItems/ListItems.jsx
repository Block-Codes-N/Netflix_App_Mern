// import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
// import "./listItems.scss";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const ListItems = ({index, item}) => {
//   const [isHovered, setIsHovered] = useState(false)
//   const [movie, setMovie] = useState({})
//   useEffect(() => {
//     const getMovie = async () =>{
//       try {
//           const res = await axios.get(`/movies/find/${item}`, {
//             headers: {
//               token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWE1Njg2Y2U2MzAxYzYwNDBmMjhlMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNTY2MjE4MiwiZXhwIjoxNzA2MDk0MTgyfQ.nDrAZ8CmyDALPVouwnLqMT7uoJBGk2ANNjK641UeL5w"
//         } 
//       })    
//       // console.log(item)
//       setMovie(res.data);
//       // // console.log(res)
//       } catch (err) {
//         console.log(err)
//       }
//     }

//     getMovie();
//   },[item])

//   return (
//     <div className="listItems" style={{left: isHovered && index * 225 -50 + index * 2.5}}
//     onMouseEnter={() => setIsHovered(true)}
//     onMouseLeave={() => setIsHovered(false)}
//     >
//       <img src={movie.img}alt="" />

//       {isHovered && (
//         <>
//       < video src= {movie.trailer} autoPlay = {true} loop/>
   
//     <div className="itemInfo">
//       <div className="icons">
//         <PlayArrow/>
//         <Add/>
//         <ThumbUpAltOutlined/> 
//         <ThumbDownAltOutlined/>

//       </div>

//       <div className="itemInfoTop">
//         <span>{movie.duration}</span>
//         <span className="limit">+{movie.limit}</span>
//         <span>{movie.year}</span>
//       </div>
//       <div className="desc">
//         {movie.desc}
//       </div>
//       <div className="genre">{movie.genre}</div>

//     </div> 
//     </>
//     )}
//     </div>
//   )
// }

// export default ListItems



import "./listItems.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@mui/icons-material"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWE1Njg2Y2U2MzAxYzYwNDBmMjhlMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNTY2MjE4MiwiZXhwIjoxNzA2MDk0MTgyfQ.nDrAZ8CmyDALPVouwnLqMT7uoJBGk2ANNjK641UeL5w"
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie?.imgSm} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}