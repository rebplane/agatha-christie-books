import React from 'react'
import { useEffect, useState } from 'react';
import { getBooks } from '../api/books';
import Book from '../components/Book';
import Header from '../components/Header';

function BookList() {

    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        getBooks(setBooks);
    }, [])

  return (
    <div className='book-list-page'>
        <Header/>
        <div className='book-list-title'><h1>ALL BOOKS</h1></div>
        <div className="book-list-container">
            {books.map((book) => {
                return (
                    <Book id={book._id} key={book._id} book={book}></Book>
                )
            })}
        </div>
    </div>
  )
}

export default BookList