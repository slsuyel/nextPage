import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import SingleBook from "./SingleBook";
import "./custom.css";
import Spinners from "./Spinners";
const Book = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Spinners />;
  }

  const { books } = useLoaderData();

  return (
    <div className="all-books">
      {books.map((book) => (
        <SingleBook key={book.isbn13} book={book} />
      ))}
    </div>
  );
};

export default Book;
