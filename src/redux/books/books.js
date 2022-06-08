import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'books',
  initialState: [
    {
      id: uuidv4(),
      author: 'Peter Jefferson',
      title: '12 Goals for life',
      category: 'Category1',
    },
    {
      id: uuidv4(),
      author: 'Mark Manson',
      title: 'Subtle art of not giving a fuck',
      category: 'Category2',
    },
    {
      id: uuidv4(),
      author: 'Napoleon Hill',
      title: 'Think and grow rich',
      category: 'Category3',
    },
  ],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      state.filter((book) => book.id !== action.payload);
    },
  },
};

const booksSlice = createSlice(options);
export const { addBook, removeBook } = booksSlice.actions;
export const selectBooks = (state) => state.books;
export default booksSlice.reducer;
