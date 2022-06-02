import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Category from './components/Categories/Category';
import Books from './components/Books/Books';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" index element={<Books />} />
          <Route path="/calculator" element={<Category />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
