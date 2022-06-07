import React from 'react';

const Book = () => (
  <div className="book">
    <ul>
      <li>
        First Book
        <button type="button" className="remove-btn">
          Remove
        </button>
      </li>
    </ul>
  </div>
);

export default Book;