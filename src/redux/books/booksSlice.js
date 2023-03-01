import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'GOT', author: 'John Snow' },
  { id: '2', title: 'Breaking Bad', author: 'Walter' },
  { id: '3', title: 'Ozark', author: 'Matt' },
];
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: nanoid(),
        title: action.payload.title,
        author: action.payload.author,
      };
      state.concat(newBook);
    },
    deleteBook: (state, action) => state.filter((book) => book.id !== action.payload),
  },
});
export const { addBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
