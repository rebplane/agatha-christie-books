import axios from 'axios';

export function register(username, email, password, setSuccess, setError) {
    axios.post("/api/accounts/register/", {
        username: username,
        email: email,
        password: password,
    }).then(res => setSuccess(true))
    .catch(() => {
        setError("Username or password already exists")
    })

}

export function isAuthenticated() {
    console.log("test")
    axios.post("/api/accounts/auth", {credentials: 'include'})
    .then(res => console.log(res.status))
    .catch((err) => {
        console.log(err)
    })
}