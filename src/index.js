import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FilterProductContextProvider from "./context/FilterProductContextProvider";
import SearchContextProvider from "./context/SearchContextProvider"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchContextProvider>
    <FilterProductContextProvider>
        <App />
    </FilterProductContextProvider>
    </SearchContextProvider>
  </React.StrictMode>
);

reportWebVitals();
