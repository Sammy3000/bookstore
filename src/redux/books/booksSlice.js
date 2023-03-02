import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lMzR4wTZ3TPgCM3omysf";
// GET BOOKS FROM API
export const getBooks = createAsyncThunk("books/getBooks", async () => {
  const response = await axios(`${BASE_URL}/books`);

  return response.data;
});

// POST BOOKS TO API
export const postBooks = createAsyncThunk(
  "books/postBooks",
  async (payload, thunkApi) => {
    try {
      const response = await axios.post(`${BASE_URL}/books`, {
        ...payload,
        item_id: nanoid(),
      });

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.data.message || "something went wrong"
      );
    }
  }
);
// DELETE BOOK FROM API

export const deleteBooks = createAsyncThunk("books/deleteBooks", async (id) => {
  const response = await axios.delete(`${BASE_URL}/books/${id}`);
  return response.data;
});

const initialState = {
  books: [],
  successfullyAddedItem: false,
};
let newBook;
const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      newBook = {
        item_id: nanoid(),
        title: action.payload.title,
        author: action.payload.author,
      };
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      const formattedBooksArr = [];
      const resObj = action.payload;

      // eslint-disable-next-line no-restricted-syntax, guard-for-in
      for (const key in resObj) {
        const itemObj = resObj[key][0];
        itemObj.item_id = key;
        formattedBooksArr.push(itemObj);
      }
      state.books = formattedBooksArr;
    });
    builder
      .addCase(postBooks.fulfilled, (state) => {
        state.successfullyAddedItem = true;
        state.books.push(newBook);
      })
      .addCase(postBooks.rejected, (state) => {
        state.successfullyAddedItem = false;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
