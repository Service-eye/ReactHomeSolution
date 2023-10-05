import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <>
            <div className="custom-body">
                <div className="login-container">
                    <div className="banner">
                        <h1>Home Solution </h1>
                        <h3>Admin Panel</h3>
                        <p>Please Login with Username and Password</p>
                    </div>
                    <div className="form">
                        <img src="./images/Logo1.png" alt="profile" />
                        <input type="name" autoComplete placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button>Sign In</button>
                        <a>Forgot Your Password?</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login
