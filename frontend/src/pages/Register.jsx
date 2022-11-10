import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../api/auth'
import Header from '../components/Header'

function Register() {

    let [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })

    let [error, setError] = useState([])

    let [isSuccess, setSuccess] = useState(false)

    const onChange = (e) => {
        setUser((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
    }

    const navigate = useNavigate()

    useEffect(() => {
        if (isSuccess) {
            navigate(`/booklist/${user.username}`)
        }
    }, [isSuccess])

    const onClick = (e) => {
        register(user.username, user.email, user.password, setSuccess, setError)
        if (error) {
            error = "Username or password already exists" 
        }
        e.preventDefault()
    }

    return (
        <div className="login-page">
            <Header/>
            <div className="login-container">
                <div className="main-title">
                    <h1 className="login-title">Register</h1>
                    <form className="login-form">
                        {error && <p>{error}</p>}
                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input type="email" value={user.email} className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={onChange} ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" value={user.username} className="form-control" id="username" name="username" aria-describedby="emailHelp" placeholder="Enter username" onChange={onChange} ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" value={user.password} className="form-control" id="password" name="password" aria-describedby="emailHelp" placeholder="Enter password" onChange={onChange}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password2">Re-enter password:</label>
                            <input type="password2" value={user.password2} className="form-control" id="password2" name="password2" aria-describedby="emailHelp" placeholder="Enter password" onChange={onChange}></input>
                        </div>
                        <button className="btn start-btn btn-lg btn-secondary" type="submit" onClick={onClick}>Register</button>
                    </form>
                    <p className="redirect-to-reg">Already have an account? <a href="/login">Login here</a></p>
                </div>
                
            </div>

        </div>
    )
}

export default Register