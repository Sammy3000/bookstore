import React from 'react';

function Book() {
  return (
    <div>
      <ul>
        <li>
          <h2>Dune</h2>
          <span>Frank Herbert</span>
          <br />
          <button type="button">Delete</button>
        </li>
        <li>
          <h2>Hunger Games</h2>
          <span>Suzanne Collins</span>
          <br />
          <button type="button">Delete</button>
        </li>
      </ul>
    </div>
  );
}

export default Book;
