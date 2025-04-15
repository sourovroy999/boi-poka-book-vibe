import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Root from "./Components/Root/Root";
import './index.css'
import ErrorPage from "./ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import DashBoard from "./Components/DashBoard/DashBoard";
import BookDetail from "./Components/BookDetail/BookDetail";
import ListedBooks from "./Components/ListedBooks/ListedBooks";
import { ToastContainer} from 'react-toastify';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>

      },{
        path:'books/:bookId',
        element:<BookDetail></BookDetail>,
        loader:()=>fetch('/booksData.json') //generally we will not load all books data for get one books. we are doing here for learning purpose
      },
      {
       path:'listedbooks',
       element:<ListedBooks/>,
       //worst way to load data
       loader: ()=> fetch('/booksData.json') //we will not use it next time

      },
      {
        path:'dashboard',
        element:<DashBoard/>
      }
      
    ]
  },
]);


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
<StrictMode>
  <RouterProvider router={router} />
  <ToastContainer />
  </StrictMode>

);

