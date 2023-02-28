import React from "react";
import { useSelector } from "react-redux";

function Book() {
  const storedBooks = useSelector((state) => state.books);
  return (
    <ul>
      {storedBooks.map((storedBook) => {
        return (
          <li key={storedBook.id}>
            <h2>{storedBook.title}</h2>
            <span>{storedBook.author}</span>
            <br />
            <button type="button">Delete</button>
          </li>
        );
      })}
    </ul>
  );
}

export default Book;
