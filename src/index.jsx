import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
