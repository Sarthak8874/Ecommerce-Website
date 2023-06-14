import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FilterProductContextProvider from "./context/FilterProductContextProvider";
import SearchContextProvider from "./context/SearchContextProvider";
import CartReducer from "./context/CartReducer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartReducer>
      <SearchContextProvider>
        <FilterProductContextProvider>
          <App />
        </FilterProductContextProvider>
      </SearchContextProvider>
    </CartReducer>
  </React.StrictMode>
);

reportWebVitals();
