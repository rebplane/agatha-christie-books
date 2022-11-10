import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getBookInfo } from '../api/books';
import Header from '../components/Header';

function BookInfo() {

  const [book, setBook] = useState({})

  const book_id = useParams().id

  useEffect(() => {
    getBookInfo(setBook, book_id);
  }, [book_id])

  return (
    <div className="book-info-page">
        <Header/>
        <div className="book-info-container">
        <h1 className="book-info-title">{book.uk_title} ({book.year} - {book.type})</h1>
        <div className="book-info-image">
            {book.image && <img src={book.image}></img>}
        </div>
        <div className="book-info-summary">
            {!book.summary && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet urna porta nulla sagittis malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus pharetra mattis est, non maximus turpis egestas eget. Donec blandit ullamcorper risus eu pellentesque. Vivamus lacinia lorem et varius consectetur. Quisque sed elit nec arcu accumsan vulputate. Maecenas luctus consectetur quam et elementum. Etiam feugiat eu dolor quis tincidunt. Donec vulputate mi vitae turpis rhoncus, quis sagittis justo volutpat. Phasellus tristique id tortor eu ultricies. Sed ex nunc, mollis id sapien sit amet, tempor tempor nulla. Morbi vel tortor imperdiet augue accumsan rutrum. Vestibulum commodo vehicula justo eu venenatis.</p>}
            {book.summary && <p>{book.summary}</p>}
        </div>
        <div className="book-info-characters">
            {book.character && <div><h4>Characters: </h4> <p>{book.character}</p></div>}
        </div>
        <div>
            {book.us_title && <p>Also known as "{book.us_title}" in the US.</p>}
        </div>
      </div>
    <footer>Summary from <a href="https://www.agathachristie.com/en/stories">www.agathachristie.com</a></footer>
    </div>
  )
}

export default BookInfo