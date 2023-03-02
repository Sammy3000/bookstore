import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../redux/books/booksSlice";
import DisplayBook from "./DisplayBook";

function Book() {
  const dispatch = useDispatch();
  const storedBooks = useSelector((state) => state.books.books);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <ul>
      {storedBooks.map((storedBook) => (
        <DisplayBook
          key={storedBook.item_id}
          id={storedBook.item_id}
          title={storedBook.title}
          author={storedBook.author}
        />
      ))}
    </ul>
  );
}

export default Book;
