import React from "react";
import "../components/BookSearch.css";
import { useState } from "react";
import axios from "axios";
const BookSearch = () => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const handleClick = async (e) => {
    e.preventDefault();
    // console.log("clicked");
    // console.log(search);
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBcHb_lxUdqiFdPrfXHWe5xdZdd4_ApLJI`
    );
    console.log(res.data.items);
    setList(res.data.items);
  };
  return (
    <>
      <div className="container">
        <h1>Book Search</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="Search books..."
            className="input"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button onClick={handleClick} className="search-button">
            Search
          </button>
        </div>

        <div className="showbooks">
          {list.map((book, id) => {
            return (
              <div className="book" key={id}>
                <a target="_blank" href={book.volumeInfo.previewLink}>
                  <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
                </a>
                <p>Title: {book.volumeInfo.title} </p>
                <p>Author: {book.volumeInfo.authors[0]}</p>
                <p>Page Count: {book.volumeInfo.pageCount}</p>
                <p>Rating: {book.volumeInfo.ratingsCount}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default BookSearch;
