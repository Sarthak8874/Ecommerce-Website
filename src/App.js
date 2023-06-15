import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Searchbar from "./pages/Searchbar";
import Cart from "./pages/Cart";

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Product url="products" title="" />
                </>
              }
            />
            <Route
              path="/electronic"
              element={
                <>
                  {" "}
                  <Product
                    url="products/category/smartphones"
                    title="-Electronic"
                  />
                </>
              }
            />
            <Route
              path="/clothes"
              element={
                <>
                  {" "}
                  <Product
                    url="products/category/mens-shirts"
                    title="-Clothes"
                  />
                </>
              }
            />
            <Route
              path="/furniture"
              element={
                <>
                  <Product
                    url="products/category/furniture"
                    title="-Furniture"
                  />
                </>
              }
            />
            <Route
              path="/sunglasses"
              element={
                <>
                  <Product
                    url="products/category/sunglasses"
                    title="-Sunglasses"
                  />
                </>
              }
            />
            <Route
              path="/search"
              element={
                <>
                  <Searchbar />
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <>
                  <Cart />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </React.StrictMode>
  );
}
export default App;
