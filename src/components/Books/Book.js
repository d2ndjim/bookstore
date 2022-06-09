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
    <div className="book-container">
      <ul className="book-list">
        {books.map((book) => (
          <li id={book.id} key={book.id}>
            <div className="book">
              <div className="book-content">
                <div className="book-info">
                  <h4 className="book-category">{book.category}</h4>
                  <h2 className="book-title">{book.title}</h2>
                  <h6 className="book-author">{book.author}</h6>
                  <div className="action-buttons">
                    <button className="button-outline" type="button">
                      Comments
                    </button>
                    <div className="vertical-divider" />
                    <button
                      className="button-outline"
                      type="button"
                      onClick={() => handleClick(book.id)}
                    >
                      {' '}
                      Remove
                    </button>
                    <div className="vertical-divider" />
                    <button className="button-outline" type="button">
                      Edit
                    </button>
                  </div>
                </div>
                <div className="progress-container">
                  <div className="circular-progress-container">
                    <div className="circular-progress" />
                  </div>
                  <div className="progress-stat">
                    <p className="percent-complete">50%</p>
                    <p className="completed">Completed</p>
                  </div>
                  <div className="progress-divider" />
                  <div className="current-chapter-container">
                    <div>
                      <p className="current-chapter-label">CURRENT CHAPTER</p>
                      <p className="current-chapter">Chapter 20</p>
                    </div>
                    <div>
                      <button className="primary-button" type="button">
                        UPDATE PROGRESS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Book;
