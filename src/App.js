import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Searchbar from "./pages/Searchbar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Product url="products" />
        </>
      ),
    },
    {
      path: "/electronic",
      element: (
        <>
          {" "}
          <Product url="products/category/smartphones" />
        </>
      ),
    },
    {
      path: "/clothes",
      element: (
        <>
          {" "}
          <Product url="products/category/mens-shirts" />
        </>
      ),
    },
    {
      path: "/furniture",
      element: (
        <>
          <Product url="products/category/furniture" />
        </>
      ),
    },
    {
      path: "/sunglasses",
      element: (
        <>
          <Product url="products/category/sunglasses" />
        </>
      ),
    },
    {
      path: "/search",
      element: (
        <>
          <Searchbar />
        </>
      ),
    },
  ]);
  return (
    <React.StrictMode>
      <div className="App">
        <Navbar />
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>
  );
}
export default App;
