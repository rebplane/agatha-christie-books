import {React, useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom";
import { getUser } from '../api/auth';
import { getUnreadBooksByUsername } from '../api/books';
import Header from '../components/Header';
import PersonalBookDelete from '../components/PersonalBookDelete';

function PersonalBookListUnread() {

    const username = useParams().username
    const [books, setBooks] = useState([]);
    const [user, setUser] = useState('');
    const [isUser, setIsUser] = useState(false); // if the user is the owner of the booklist
    
    useEffect(() => {
        getUser(setUser);
        console.log(user)
        console.log(username)
        console.log(user==username)
        if (user == username) {
            setIsUser(true)
        }
        getUnreadBooksByUsername(setBooks, username);
    }, [user])

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
                  <PersonalBookDelete id={book._id} key={book._id} isUser={isUser} book={book}></PersonalBookDelete>
              )
          })}
      </div>
  </div>
      );
}

export default PersonalBookListUnread;