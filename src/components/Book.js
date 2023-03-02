import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../redux/books/booksSlice";
import DisplayBook from "./DisplayBook";

function Book() {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <ul>
      {books.map((storedBook) => (
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
