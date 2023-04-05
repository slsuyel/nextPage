import React from "react";
import "./custom.css";
import { Link } from "react-router-dom";
const SingleBook = ({ book }) => {
  const { image, price, subtitle, title } = book;

  return (
    <Link to ={`/book/${book.isbn13}`}>
      <div className=" m-auto position-relative hover">
        <img src={image} alt="" />

        <div className=" book-info mx-2 px-3 ">
          <h4> {title}</h4>
          <p>{subtitle}</p>
          <p>Price : {price}</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleBook;
