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
                  <Product url="products" />
                </>
              }
            />
            <Route
              path="/electronic"
              element={
                <>
                  {" "}
                  <Product url="products/category/smartphones" />
                </>
              }
            />
            <Route
              path="/clothes"
              element={
                <>
                  {" "}
                  <Product url="products/category/mens-shirts" />
                </>
              }
            />
            <Route
              path="/furniture"
              element={
                <>
                  <Product url="products/category/furniture" />
                </>
              }
            />
            <Route
              path="/sunglasses"
              element={
                <>
                  <Product url="products/category/sunglasses" />
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
