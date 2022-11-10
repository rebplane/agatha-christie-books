import React from 'react'

function PersonalBookDelete() {
return (
    <div className='book-container' key={book._id}>
        <button className="btn btn-sm btn-dark btn-custom btn-add">-</button>
        <Link className='book-link' to={`/books/info/${book._id}`}>
            <p>{book.uk_title}</p>
        </Link>
        <p>{book.year}</p>
    </div>
    )
}

export default PersonalBookDelete