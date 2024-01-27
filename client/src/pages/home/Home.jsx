import List from "../../components/list/List.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"
import Featured from "../../components/featured/Featured.jsx"
import "./home.scss"
import { useState, useEffect } from "react"
import axios from "axios"


const Home = ({ type }) => {

  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null)

  useEffect(() => {
    const genRandomList = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWE1Njg2Y2U2MzAxYzYwNDBmMjhlMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNTY2MjE4MiwiZXhwIjoxNzA2MDk0MTgyfQ.nDrAZ8CmyDALPVouwnLqMT7uoJBGk2ANNjK641UeL5w"
          }
        });
        setLists(res.data);
        // console.log(res)
      } catch (err) {
        console.log(err)
      }
    };
    genRandomList();
  }, [type, genre])

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (<List  list={list} />))}
      console.log(list)

    </div>

  )
}

export default Home