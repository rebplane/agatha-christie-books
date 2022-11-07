import React from 'react'
import { Link } from 'react-router-dom'

function Book({ book }) {
  return (
    <div className='book-container' key={book._id}>
        <Link className='book-link' to={`/books/info/${book._id}`}>
            <p>{book.uk_title}</p>
        </Link>
        <p>{book.year}</p>
    </div>
  )
}

export default Book