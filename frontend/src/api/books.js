import axios from 'axios';

export function getBooks(setBooks) {
    axios.get("/api/books/")
    .then((res) => setBooks(res.data))
}

export function getBookInfo(setBook, book_id) {
    axios.get(`/api/books/info/${book_id}`)
    .then((res) => setBook(res.data))
}

export function getReadBooksByUsername(setBooks, username) {
    axios.get(`/api/books/read/${username}`)
    .then((res) => setBooks(res.data))
}

export function getUnreadBooksByUsername(setBooks, username) {
    axios.get(`/api/books/unread/${username}`)
    .then((res) => setBooks(res.data))
}

export function addBook(book_id, setBooks, username) {
    axios.put('/api/books/add', {
        book_id: book_id,
        credentials: 'include'
    }).then(() => {
        getUnreadBooksByUsername(setBooks, username)
    })
}

export function deleteBook(book_id, setBooks, username) {
    axios.put('/api/books/remove', {
        book_id: book_id,
        credentials: 'include'
    }).then(() => {
        getReadBooksByUsername(setBooks, username)
    })
}