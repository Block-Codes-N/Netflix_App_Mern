import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";
import React from 'react'

const Watch = () => {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        <video className="video" autoplay progres controls src="https://youtu.be/ohVKDUPS0fw"></video>
    </div>
  )
}

export default Watch