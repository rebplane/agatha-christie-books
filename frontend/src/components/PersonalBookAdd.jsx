import React from 'react'
import { Link } from 'react-router-dom'

// todo only render add button if it's the user's booklist

function PersonalBookAdd({book, isUser, addNewBook}) {
  function handleClick() {
    addNewBook(book._id)
  }

  return (
    <div className='book-container' key={book._id}>
        {isUser && <button onClick={handleClick} className="btn btn-sm btn-dark btn-custom btn-add">Add</button>}
        <Link className='book-link' to={`/books/info/${book._id}`}>
            <p>{book.uk_title}</p>
        </Link>
        <p>{book.year}</p>
    </div>
  )
}

export default PersonalBookAdd