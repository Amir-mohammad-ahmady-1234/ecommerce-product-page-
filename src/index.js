import react from "react";
import ReactDOM from "react-dom/client";
import "./general.css";
import "./index.css";
import "./media.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <react.StrictMode>
    <App />
  </react.StrictMode>
);
