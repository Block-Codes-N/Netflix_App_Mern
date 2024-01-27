import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";

export default function WidgetSm() {

  const [newUsers, setNewUsers] = useState([])

  useEffect(() => {
const getNewUSers= async () => {
    try {
         const res = await axios.get("/users?new=true", {headers: {"token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWE1Njg2Y2U2MzAxYzYwNDBmMjhlMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNTY2MjE4MiwiZXhwIjoxNzA2MDk0MTgyfQ.nDrAZ8CmyDALPVouwnLqMT7uoJBGk2ANNjK641UeL5w"}})

         setNewUsers(res.data)
  } catch (err) {
      console.log(err)
    }
  }
  getNewUSers()
   }, [])
  
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) =>(
        <li className="widgetSmListItem">
          <img
            src={user.profilePic || "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}
