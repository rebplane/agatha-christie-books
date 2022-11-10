import React from 'react'
import { Link } from 'react-router-dom'

function PersonalBookDelete({book, isUser, deleteNewBook}) {

    function handleClick() {
        deleteNewBook(book._id)
    }

    return (
        <div className='book-container' key={book._id}>
            {isUser && <button onClick={handleClick} className="btn btn-sm btn-dark btn-custom btn-add">Delete</button>}
            <Link className='book-link' to={`/books/info/${book._id}`}>
                <p>{book.uk_title}</p>
            </Link>
            <p>{book.year}</p>
        </div>
    )
}

export default PersonalBookDelete