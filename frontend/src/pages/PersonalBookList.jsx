import {React, useState, useEffect} from 'react'
import { useParams, Link } from "react-router-dom";
import { getUser } from '../api/auth';
import { getReadBooksByUsername } from '../api/books';
import Header from '../components/Header';
import PersonalBookAdd from '../components/PersonalBookAdd';

function PersonalBookList() {

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
        getReadBooksByUsername(setBooks, username);
    }, [user])

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
                  <PersonalBookAdd id={book._id} key={book._id} book={book} isUser={isUser}></PersonalBookAdd>
              )
          })}
      </div>
  </div>
      );
}

export default PersonalBookList;