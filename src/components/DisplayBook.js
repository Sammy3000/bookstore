import React from "react";
import { useDispatch } from "react-redux";
import { deleteBooks, removeBook } from "../redux/books/booksSlice";
import "./styles/DisplayBook.css";

const DisplayBook = ({ id, title, author }) => {
  const dispatch = useDispatch();
  const deleteHandler = (e) => {
    const { id } = e.target.dataset;
    dispatch(removeBook(id));
    dispatch(deleteBooks(id));
  };
  return (
    <div className="displayBook">
      <div className="left-side">
        <span className="category-name">Action</span>
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
        <div className="actions">
          <p className="comments">Comments</p>
          <button
            className="delete-btn"
            type="button"
            data-id={id}
            onClick={deleteHandler}
          >
            Remove
          </button>
          <p className="edit">Edit</p>
        </div>
      </div>
      <div className="right-side">
        <div className="complete-graph">
          <div className="oval" />
          <div className="complete-percent">
            <span className="percentage">75%</span>
            <p className="completed">completed</p>
          </div>
        </div>

        <div className="chapter">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapter-name">Chapter 17</p>
          <button className="chapter-btn" type="button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayBook;
