import {React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'
import { isAuthenticated } from '../api/auth';

function Header() {

  const getMyBooks = (e) => {
    isAuthenticated()
    e.preventDefault()
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Agatha Christie Booklist</a>
        <div className="navbar-nav">
            <a className="nav-item nav-link" href="/books/all">All Books</a>
            <a className="nav-item nav-link" onClick={getMyBooks}>My Books</a>
        </div>
    </nav>
  )
}

export default Header