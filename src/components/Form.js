import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, postBooks } from "../redux/books/booksSlice";
import "./styles/Form.css";

function Form() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const onSetTitle = (event) => {
    setTitle(event.target.value);
  };
  const onSetAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        title,
        author,
        category: "General",
      })
    );
    dispatch(
      postBooks({
        title,
        author,
        category: "General",
      })
    );

    setTitle("");
    setAuthor("");
  };
  return (
    <div>
      <span className="form-header">ADD NEW BOOK</span>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={title}
          onChange={onSetTitle}
          placeholder="Book title.."
          required
        />
        <input
          type="text"
          value={author}
          onChange={onSetAuthor}
          placeholder="Book author.."
          required
        />
        <button className="submit-btn" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default Form;
