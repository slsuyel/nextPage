import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import "./custom.css";
import Spinners from "./Spinners";
const BookDetails = () => {
    
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Spinners />;
  }

  const bookData = useLoaderData();
  //console.log(bookData);
  const { image, price, subtitle, title, pages, rating, desc } = bookData;

  const [fold, setFold] = useState(false);

  return (
    <div className="card">
      <div className="align-items-center d-flex justify-content-around ">
        <img src={image} alt="" maxwidth={"500px"} />
        <div className="w-50">
          <p className="bg-primary d-inline p-1 px-3 rounded text-bg-dark">
            BRAND NEW
          </p>

          <h2 className="fw-bold my-2">{title}</h2>
          <p>Pages : {pages}</p>
          <p>rating : {rating}</p>

          {fold ? (
            <>
              <p>{desc.substring(0, 100)}</p>{" "}
              <span
                onClick={() => {
                  setFold(false);
                }}
                className="bg-primary p-1 rounded-1 text-bg-danger"
              >
                Read more
              </span>
            </>
          ) : (
            <>
              <p>{desc}</p>{" "}
              <span
                onClick={() => {
                  setFold(true);
                }}
                className="bg-primary p-1 rounded-1 text-bg-danger"
              >
                Read Less
              </span>
            </>
          )}

          <div className="align-items-center d-flex gap-3">
            <p className="fs-4 fw-semibold mb-0 text-black-50">
              Price : {price}
            </p>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
