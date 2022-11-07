import axios from 'axios';

export function getBooks(setBooks) {
    axios.get("/api/books/")
    .then((res) => setBooks(res.data))
}