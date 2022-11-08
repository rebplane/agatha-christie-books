import React from 'react'
import Header from '../components/Header';

function PersonalBookList() {
    return (
      <div className='book-list-page'>
      <Header/>
      <div className='book-list-title'><h1>ALL BOOKS</h1></div>
      <div className="book-list-container">
          {/* {books.map((book) => {
              return (
                  <Book id={book._id} key={book._id} book={book}></Book>
              )
          })} */}
      </div>
  </div>
      );
}

export default PersonalBookList;