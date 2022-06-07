import React from 'react';
import { useSelector } from 'react-redux';
import { selectBooks } from '../../redux/books/books'

const Book = () => {
  const books = useSelector(selectBooks);
  return (
    <div className="book">
    <ul>
      {books.map((book) => (
        
      ))}
    </ul>
  </div>
  )
  
}
  

export default Book;
