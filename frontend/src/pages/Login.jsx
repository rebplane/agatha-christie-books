import {React, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { login } from '../api/auth'

function Login() {

    let [user, setUser] = useState({
        username: '',
        password: '',
    })

    let [error, setError] = useState([])

    let [isSuccess, setSuccess] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        if (isSuccess) {
            navigate(`/booklist/${user.username}`)
        }
    }, [isSuccess])

    const onChange = (e) => {
        setUser((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }))
    }

    const onClick = (e) => {
        login(user.username, user.password, setSuccess, setError)
        e.preventDefault()
    }

    return (
        <div className="login-page">
            <Header/>
            <div className="login-container">
                <div className="main-title">
                    <h1 className="login-title">Login</h1>
                    <form className="login-form">
                        {error && <p>{error}</p>}
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" onChange={onChange} className="form-control" name="username" value={user.username} id="username" aria-describedby="emailHelp" placeholder="Enter username"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" onChange={onChange} className="form-control" name="password" value={user.password} id="password" aria-describedby="emailHelp" placeholder="Enter password"></input>
                        </div>
                        <button className="btn start-btn btn-lg btn-secondary" onClick={onClick}>Login</button>
                    </form>
                    <p className="redirect-to-reg">Don't have an account yet? <a href="/register">Register here</a></p>
                </div>
                
            </div>

        </div>
    )
}

export default Login