import React from "react";
import ReactDOM from "react-dom/client";
import NotesApp from "./NotesApp";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NotesApp />
    </BrowserRouter>
  </React.StrictMode>
);
