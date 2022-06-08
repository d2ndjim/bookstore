import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBooks, removeBook } from '../../redux/books/books';

const Book = () => {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book">
      <ul>
        {books.map((book) => (
          <li id={book.id} key={book.id}>
            <p>{book.category}</p>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <button type="button" onClick={() => handleClick(book.id)}>
              Remove Book
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Book;
