import {React, useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom";
import { getUser } from '../api/auth';
import { deleteBook, getReadBooksByUsername } from '../api/books';
import Header from '../components/Header';
import PersonalBookDelete from '../components/PersonalBookDelete';

function PersonalBookList() {

    const username = useParams().username
    const [books, setBooks] = useState([]);
    const [user, setUser] = useState('');
    const [isUser, setIsUser] = useState(false); // if the user is the owner of the booklist
    
    useEffect(() => {
        getUser(setUser);
        if (user === username) {
            setIsUser(true)
        }
        getReadBooksByUsername(setBooks, username);
    }, [user])

    function deleteNewBook(book_id) {
        deleteBook(book_id, setBooks, username);
    }

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
                  <PersonalBookDelete id={book._id} key={book._id} deleteNewBook={deleteNewBook} book={book} isUser={isUser} ></PersonalBookDelete>
              )
          })}
      </div>
  </div>
      );
}

export default PersonalBookList;