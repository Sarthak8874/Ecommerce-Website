import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FilterProductContextProvider from "./context/FilterProductContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FilterProductContextProvider>
        <App />
    </FilterProductContextProvider>
  </React.StrictMode>
);

reportWebVitals();
