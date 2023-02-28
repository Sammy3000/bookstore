import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/books/booksSlice";

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
        title: title,
        author: author,
      })
    );

    setTitle("");
    setAuthor("");
  };
  return (
    <div>
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
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
