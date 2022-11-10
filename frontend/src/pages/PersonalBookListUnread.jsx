import {React, useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom";
import { getUser } from '../api/auth';
import { getUnreadBooksByUsername, addBook } from '../api/books';
import Header from '../components/Header';
import PersonalBookAdd from '../components/PersonalBookAdd';

function PersonalBookListUnread() {

    const username = useParams().username
    const [books, setBooks] = useState([]);
    const [user, setUser] = useState('');
    const [isUser, setIsUser] = useState(false); // if the user is the owner of the booklist
    
    useEffect(() => {
        getUser(setUser);
        if (user === username) {
            setIsUser(true)
        }
        getUnreadBooksByUsername(setBooks, username);
    }, [user])

    function addNewBook(book_id) {
        addBook(book_id, setBooks, username);
    }

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
                  <PersonalBookAdd id={book._id} key={book._id} isUser={isUser} addNewBook={addNewBook} book={book}></PersonalBookAdd>
              )
          })}
      </div>
  </div>
      );
}

export default PersonalBookListUnread;