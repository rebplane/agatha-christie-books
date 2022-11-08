import React from 'react'
import Header from '../components/Header'

function Register() {
  return (
    <div className="login-page">
        <Header/>
        <div className="login-container">
            <div className="main-title">
                <h1 className="login-title">Register</h1>
                <form className="login-form">
                    <div className="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    </div>
                    <div className="form-group">
                        <label for="username">Username:</label>
                        <input type="text" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username"></input>
                    </div>
                    <div className="form-group">
                        <label for="password">Password:</label>
                        <input type="password" class="form-control" id="password" aria-describedby="emailHelp" placeholder="Enter password"></input>
                    </div>
                    <div className="form-group">
                        <label for="password2">Re-enter password:</label>
                        <input type="password2" class="form-control" id="password2" aria-describedby="emailHelp" placeholder="Enter password"></input>
                    </div>
                    <button className="btn start-btn btn-lg btn-secondary">Register</button>
                </form>
                <p className="redirect-to-reg">Already have an account? <a href="/login">Login here</a></p>
            </div>
            
        </div>

    </div>
  )
}

export default Register