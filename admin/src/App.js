import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { Login } from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import ListLists from "./pages/listLists/ListLists";
import ProductList from "./pages/productList/ProductList";

function App() {
  const {user} = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <>
        <Topbar />

        <div className="container">
          <Sidebar />

          <Route exact path="/">
            <Home />
          </Route>

          {/* USER ROUTES */}
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>

          {/* MOVIE ROUTES */}
          <Route path="/movies">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>

          {/* LIST ROUTES */}
          <Route path="/lists">
            <ListLists />
          </Route>
          {/* <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route> */}
        </div>
        </>
  
      </Switch>
    </Router>
  );
}

export default App;
