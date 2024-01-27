// import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material"
// import "./list.scss"
// import ListItems from "../listItems/ListItems"
// import { useRef, useState } from "react"

// const List = ({ list, item }) => {
//   const [isMoved, setIsMoved] = useState(false);
//   const [slideNo, setSlideNo] = useState(0)
//   const listRef = useRef()
//   const handleClick = (direction) => {
//     setIsMoved(true)
//     let distance = listRef.current.getBoundingClientRect().x - 50
//     if (direction === "left" && slideNo > 0) {
//       listRef.current.style.transform = `translateX(${340 + distance}px)`
//       setSlideNo(slideNo - 1);
//     }
//     if (direction === "right" && slideNo < 5) {
//       listRef.current.style.transform = `translateX(${-340 + distance}px)`
//       setSlideNo(slideNo + 1);

//     }
//   }
//   return (
//     <div className="list">
//       <span className="listTitle"> {list.title}</span>
//       <div className="wrapper" >
//         <ArrowBackIosOutlined className="slideArrow left" onClick={() => handleClick("left")} />
//         <div className="container" ref={listRef}>
//           {/* {list.map((item, index) => <ListItems key={index} index={index} item={item} />)} */}
//           {list.map((item, index) => (
//     <ListItems key={index} index={index} item={item} /> 
//  ))}
//           <ListItems index={0} item={item}/>
//           <ListItems index={1} item={item}/>
//           <ListItems index={2} item={item}/>
//           <ListItems index={3} item={item}/>
//           <ListItems index={4} item={item}/>
//           <ListItems index={5} item={item}/>
//           <ListItems index={6} item={item}/>
//           <ListItems index={7} item={item}/>
//           <ListItems index={8} item={item}/>
//           <ListItems index={9} item={item}/>
//         </div>
//         <ArrowForwardIosOutlined className="slideArrow right" onClick={() => handleClick("right")} />
//       </div>

//     </div>
//   )
// }

// export default List


import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material"
import { useRef, useState } from "react";
import ListItems from "../listItems/ListItems";
import "./list.scss";

export default function List({ list }) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {list.content.map((item, i) => (
            <ListItems index={i} item={item} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}