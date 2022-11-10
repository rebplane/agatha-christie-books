import {React, useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom";
import { getReadBooksByUsername } from '../api/books';
import Header from '../components/Header';
import PersonalBookAdd from '../components/PersonalBookAdd';

function PersonalBookList() {

    const username = useParams().username
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        getReadBooksByUsername(setBooks, username);
    }, [])

    return (
      <div className='book-list-page'>
      <Header/>
      <div className='book-list-title'><h1>{username}'s Read Books</h1></div>
      <Link className='book-link book-list-change' to={`/booklist/unread/${username}`}>
            <p>See unread</p>
        </Link>
      <div className="book-list-container">
          {books.map((book) => {
              return (
                  <PersonalBookAdd id={book._id} key={book._id} book={book}></PersonalBookAdd>
              )
          })}
      </div>
  </div>
      );
}

export default PersonalBookList;