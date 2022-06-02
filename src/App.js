import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Category from './components/Categories/Category';
import Books from './components/Books/Books';
import Header from './components/Header/Header';

function App() {
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
