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
      console.log(error);
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
    deleteBooks: (state, action) =>
      state.books.filter((book) => book.item_id !== action.payload),
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.fulfilled, (state, action) => {
      // sdjkd,
      const formattedBooksArr = [];
      const resObj = action.payload;
      for (const key in resObj) {
        const itemObj = resObj[key][0];
        itemObj.item_id = key;
        formattedBooksArr.push(itemObj);
      }
      state.books = formattedBooksArr;
    });
    builder
      .addCase(postBooks.fulfilled, (state, action) => {
        console.log("Check post data", action.payload);
        state.successfullyAddedItem = true;
        setTimeout(() => {
          state.successfullyAddedItem = false;
        }, 2000);
      })
      .addCase(postBooks.rejected, (state, action) => {
        console.log("post error", action.payload);
      });
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
