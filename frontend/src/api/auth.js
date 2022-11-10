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

export function isAuthenticated() {
    console.log("test")
    axios.post("/api/accounts/auth", {credentials: 'include'})
    .then(res => console.log(res.status))
    .catch((err) => {
        console.log(err)
    })
}