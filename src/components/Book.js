import React from "react";
import { useSelector } from "react-redux";

import DisplayBook from "./DisplayBook";

function Book() {
  const storedBooks = useSelector((state) => state.books);

  return (
    <ul>
      {storedBooks.map((storedBook) => {
        return (
          <DisplayBook
            key={storedBook.id}
            id={storedBook.id}
            title={storedBook.title}
            author={storedBook.author}
          />
        );
      })}
    </ul>
  );
}

export default Book;
