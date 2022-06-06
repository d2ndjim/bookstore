export const addBook = (book) => {
  return {
    type: 'books/addBook',
    payload: book
  }
}

export const removeBook = (book) => {
  return {
    type: 'books/removeBook',
    payload: book
  }
}

const initialState = [];
const booksReducer = (books = initialState, action) => {
  switch(action.type) {
    case 'books/addBook':
      return [...books, action.payload]
    case 'books/removeBook':
      return books.filter(book => book.id !== action.payload.id)
    default:
      return books
  }
}

export default booksReducer