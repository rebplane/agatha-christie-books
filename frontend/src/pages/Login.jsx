import {React, useState} from 'react'
import Header from '../components/Header'

function Login() {
  return (
    <div className="login-page">
        <Header/>
        <div className="login-container">
            <div className="main-title">
                <h1 className="login-title">Login</h1>
                <form className="login-form">
                    <div className="form-group">
                        <label for="username">Username:</label>
                        <input type="text" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username"></input>
                    </div>
                    <div className="form-group">
                        <label for="password">Password:</label>
                        <input type="password" class="form-control" id="password" aria-describedby="emailHelp" placeholder="Enter password"></input>
                    </div>
                    <button className="btn start-btn btn-lg btn-secondary">Login</button>
                </form>
                <p className="redirect-to-reg">Don't have an account yet? <a href="/register">Register here</a></p>
            </div>
            
        </div>

    </div>
  )
}

export default Login