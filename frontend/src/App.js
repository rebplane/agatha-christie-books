import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './pages/BookList';
import BookInfo from './pages/BookInfo';
import Login from './pages/Login';
import Register from './pages/Register';
import PersonalBookList from './pages/PersonalBookList';
import PersonalBookListUnread from './pages/PersonalBookListUnread';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/books/all' element={<BookList/>}></Route>
        <Route path='books/info/:id' element={<BookInfo/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/booklist/:username' element={<PersonalBookList/>}></Route>
        <Route path='/booklist/unread/:username' element={<PersonalBookListUnread/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
