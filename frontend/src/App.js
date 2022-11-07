import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './pages/BookList';
import BookInfo from './pages/BookInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/books/all' element={<BookList/>}></Route>
        <Route path='books/info/:id' element={<BookInfo/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
