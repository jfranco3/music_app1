import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById("root"));

const Main = () => (
  <BrowserRouter>
  <main>
    <Router />
  </main>
</BrowserRouter>
);

root.render(<App/>);
 
// reportWebVitals();