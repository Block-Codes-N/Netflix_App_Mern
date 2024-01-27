import "./app.scss"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import { BrowserRouter, Route, Routes, useNavigate  } from "react-router-dom";

const App = () => {
  const user = true;
  return (

    <BrowserRouter>
      {/* const navigate = useNavigate(); */}
    <Routes>
    <Route exact path="/" element={user ? <Home /> : <Register/>} />
    <Route exact path="/register" element={!user ? <Register />: <Home/>} />
    <Route exact path="/login" element={!user ? <Login />: <Home/>} />
    { user && <>
    
    <Route exact path="/" element={<Home />} />
      <Route path="/movies" element={<Home type = "Movies" />} />
      <Route path="/series" element={<Home type = "Series" />} />
      <Route path="/watch" element={<Watch />} />
    </>
    }
      

    </Routes>
    </BrowserRouter>
    // </div>
  )
}
export default App; 


// REACT ROUTER setup procedure for main App.js file...............................

// import { BrowserRouter, Route, Routes } from "react-router-dom";


// <BrowserRouter>
//     <Routes>
//       <Route path="/home" element={<Home />} /> {/* Route to Home component */}
//       <Route path="/about" element={<About />} /> {/* Route to About component */}
//     </Routes>

// </BrowserRouter>



// REACT ROUTER setup procedure for navigation file...............................

// import { Link } from "react-router-dom";
//      <open with Link and navigate to="/">  // sample
      
//     <Link className="navbar-brand" to="/">Inotebook</Link>     
//     <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
//     <Link className="nav-link" to="/about">About</Link>
  