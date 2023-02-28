import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState = [];
const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: nanoid(),
        title: action.payload.title,
        author: action.payload.author,
      };
      state.push(newBook);
    },
    deleteBook: (state, action) => {
      state.filter((book) => book.id !== action.payload.id);
    },
  },
});
export const { addBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
