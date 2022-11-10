import axios from 'axios';

export function register(username, email, password, setSuccess, setError) {
    axios.post("/api/accounts/register/", {
        username: username,
        email: email,
        password: password,
    }).then((res) => {
        if (res.status == 200) {
            setSuccess(true)
        }
    })
    .catch((err) => {
        setError(err.response.data.error)
    })

}

export function login(username, password, setSuccess, setError) {
    axios.post("/api/accounts/login/", {
        username: username,
        password: password,
    }).then((res) => {
        if (res.status == 200) {
            setSuccess(true)
        }
    })
    .catch((err) => {
        setError("Username or password was invalid.") 
    })
}

export function isAuthenticated(setUser, setClicked) {
    axios.post("/api/accounts/auth", {credentials: 'include'})
    .then(res => {
        if (res.status == 200) {
            setUser(res.data.username)
        }
        setClicked(true)
    })
    .catch((err) => {
        setClicked(true)
        console.log(err)
    })
}