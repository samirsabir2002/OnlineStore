import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import MainStore from "./store/Index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={MainStore}>
      <App />
    </Provider>
  </StrictMode>
);
