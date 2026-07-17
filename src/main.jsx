
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Scroll from "./Scroll";

// Font Poppins 
import "@fontsource/poppins/400.css"; // Regular
import "@fontsource/poppins/500.css"; // Medium
import "@fontsource/poppins/600.css"; // SemiBold
import "@fontsource/poppins/700.css"; // Bold

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Scroll />
    <App />
  </BrowserRouter>
);