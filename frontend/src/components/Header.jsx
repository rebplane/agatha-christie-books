import React from 'react'
// import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Agatha Christie Booklist</a>
        <div className="navbar-nav">
            <a className="nav-item nav-link" href="/">All Books</a>
            <a className="nav-item nav-link" href="/">My Books</a>
        </div>
    </nav>
  )
}

export default Header