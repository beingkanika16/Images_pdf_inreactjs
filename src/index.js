import React from "react";
import ReactDOM from "react-dom";
import App1 from "./App1";
import PDFG from "./PDFG";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <h3>Uploading the Preview of an Image</h3>
    <App />
    <h3>Converting Image to base64</h3>
    <App1 />
    <h3>Downloading pdf greate by us</h3>
    <PDFG />
  </React.StrictMode>,
  rootElement
);
