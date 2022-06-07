import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectBooks } from '../../redux/books/books';

const Book = () => {
  const books = useSelector(selectBooks);

  useEffect(() => {
  }, []);

  return (
    <div className="book">
      <ul>
        {books.map((book) => (
          <li id={book.id} key={book.id}>
            <p>{book.category}</p>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <button type="button">Remove Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Book;
