import { useRef, useState } from "react"
import "./register.scss"

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const emailRef = useRef()
    const passRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }
    const handleFinish = () => {
        setPassword(passRef.current.value)
    }

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="" className="logo" />

                    <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited Movies, TV shows, and more</h1>
                <h2>Watch Anywhere. Cancel Anytime</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                {
                    !email ? (
                        <div className="input" >
                            <input type="email" placeholder="email address" ref={emailRef} />
                            <button className="registerButton" onClick={handleStart}>Get Started</button>
                        </div>
                    ) : (
                    <div className="input">
                        <input type="password" placeholder="Password" ref={passRef} />
                        <button className="registerButton" onClick={handleFinish}>Start</button>
                    </div>
                    
                    )
                }

            </div>
        </div>
    )
}

export default Register