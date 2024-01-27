import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import "./featured.scss"
import React from 'react'

const Featured = ({type}) => {
    return (
        <div className="featured">
            {
                type && (
                    <div className="category">
                        <span>{type === "movies"? "Movies" : "Series"}</span>
                        <select name="genre" id="genre">
                            <option >Genre</option>
                            <option value="adventure">Adventure</option>
                            <option value="comedy">Comedy</option>
                            <option value="crime">Crime</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="horror">Horror</option>
                            <option value="thriller">Thriller</option>
                            <option value="western">Western</option>
                            <option value="adventure">Adventure</option>
                            <option value="animation">Animation</option>
                            <option value="drama">Drama</option>
                            <option value="historical">Historical</option>
                        </select>
                    </div>
                )
            }
            <img width={"100%"} height={"850px"} src="https://images.hdqwalls.com/download/4k-money-heist-season-4-netflix-aw-2560x1700.jpg" alt="xc" />

            <div className="info">
                <img src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1z" alt="" />

                <div className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, modi dolores. Obcaecati aliquam vero qui commodi reiciendis saepe perferendis quo vitae magnam optio maiores nisi, eos, magni quia et ullam?
                </div>
                <div className="buttons">
                    <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                    </button>
                    <button className="more">
                    <InfoOutlined />
                    <span>Info</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Featured