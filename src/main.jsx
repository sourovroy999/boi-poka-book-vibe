import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Components/Root/Root";
import './index.css'
import ErrorPage from "./ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import DashBoard from "./Components/DashBoard/DashBoard";
import BookDetail from "./Components/BookDetail/BookDetail";


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
        loader:()=>fetch('/booksData.json')
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

  <RouterProvider router={router} />
);

