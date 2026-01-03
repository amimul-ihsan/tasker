import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Tasker from "./Tasker.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Tasker />
  </StrictMode>
);
