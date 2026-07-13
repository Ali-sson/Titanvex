
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Scroll from "./Scroll";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Scroll />
    <App />
  </BrowserRouter>
);