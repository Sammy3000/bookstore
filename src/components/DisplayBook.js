import React from "react";
import { useDispatch } from "react-redux";
import { deleteBooks, removeBook } from "../redux/books/booksSlice";

const DisplayBook = ({ id, title, author }) => {
  const dispatch = useDispatch();
  const deleteHandler = (e) => {
    const { id } = e.target.dataset;
    dispatch(removeBook(id));
    dispatch(deleteBooks(id));
  };
  return (
    <div className="displayBook">
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" data-id={id} onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
};

export default DisplayBook;
