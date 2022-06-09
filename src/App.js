import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Category from './components/Categories/Category';
import Books from './components/Books/Books';
import Header from './components/Header/Header';
import { fetchBooks } from './redux/books/books';
import './App.scss';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" index element={<Books />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
