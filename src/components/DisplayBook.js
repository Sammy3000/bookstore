import React from "react";
import { useDispatch } from "react-redux";
import { deleteBooks } from "../redux/books/booksSlice";

const DisplayBook = ({ id, title, author }) => {
  const dispatch = useDispatch();

  return (
    <div className="displayBook">
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" onClick={() => dispatch(deleteBooks(id))}>
        Delete
      </button>
    </div>
  );
};

export default DisplayBook;
