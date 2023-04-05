import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Book from "./components/Book";
import About from "./components/About";
import Spinners from "./components/Spinners";
import BookDetails from "./components/BookDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/",
        element:<App/>,
      },
      {
        path : '/book',
        element : <Book/>,
        loader : ()=> fetch('https://api.itbook.store/1.0/new')
      },
      {
        path : 'book/:id',
        element : <BookDetails/>,
          loader : ({params})=> fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      },
      {
        path : '/about',
        element : <About/>
      },
      {
        path : '/spinners',
        element : <Spinners></Spinners>
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
