import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { publicAsset } from "./data/assets";
import "./styles/globals.css";

document.documentElement.style.setProperty(
  "--page-bg-image",
  `url("${publicAsset("images/mms/bremen-page-parallax.png")}")`,
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
