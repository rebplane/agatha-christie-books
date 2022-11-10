import {React, useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom";
import { getUnreadBooksByUsername } from '../api/books';
import Header from '../components/Header';
import PersonalBookAdd from '../components/PersonalBookAdd';

function PersonalBookListUnread() {

    const username = useParams().username
    console.log(username)
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        getUnreadBooksByUsername(setBooks, username);
    }, [])

    return (
      <div className='book-list-page'>
      <Header/>
      <div className='book-list-title'><h1>{username}'s Unread Books</h1></div>
      <Link className='book-link book-list-change' to={`/booklist/${username}`}>
            <p>See read</p>
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

export default PersonalBookListUnread;