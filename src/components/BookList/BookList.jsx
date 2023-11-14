import React, { useState, useEffect } from "react";

import "./bookList.css";

export const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://books-toplist-100.onrender.com/books"
        );
        const data = await response.json();
        console.log(data);
        setBooks(data);
        console.log(books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [books]);

  return (
    <>
      <div className="container">
        <h2>Book List</h2>
        
          {books.map((book) => (
            <div className={"book-card"} key={book.Rank}>
                <h4>{book["book title"]}</h4>
                <p>Ranking: {book.Rank}</p>
                <p>Genre: {book.genre}</p>
                <p>Rating: {book.rating}</p>
            </div>
          ))}
        
      </div>
    </>
  );
};

export default BookList;

// <div>
//   <h2>Book List</h2>
//   <ul>
//     {books.map(book => (
//       <li key={book.Rank}>{book['book title']}</li>
//     ))}
//   </ul>
// </div>
