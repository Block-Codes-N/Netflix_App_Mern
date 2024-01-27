import React, { useContext, useState } from 'react'
import {AuthContext} from "../../context/authContext/AuthContext"
import "./login.css"
import { login } from '../../context/authContext/apiCalls';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isFetching , dispatch} = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        login({email, password}, dispatch);
    }

  return (
    <div className='login'>
        <form  className="loginForm">
            <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)}  className='loginInput'/>
            <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} className='loginInput' />
            <button className="loginButton" onClick={handleLogin} disabled={isFetching}>Login</button>
        </form>
    </div>
  )
}
