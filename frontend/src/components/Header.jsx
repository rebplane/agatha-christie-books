import {React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'
import { isAuthenticated } from '../api/auth';

function Header() {

    const [user, setUser] = useState(null)
    const [clicked, setClicked] = useState(false)

    const getMyBooks = (e) => {
      isAuthenticated(setUser, setClicked)
    }

    const navigate = useNavigate()

    useEffect(() => {
      if (user) {
        navigate(`/booklist/${user}`)
      }
    }, [clicked])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Agatha Christie Booklist</a>
        <div className="navbar-nav">
            <a className="nav-item nav-link" href="/books/all">All Books</a>
            <a className="nav-item nav-link my-books-button" onClick={getMyBooks}>My Books</a>
        </div>
    </nav>
  )
}

export default Header