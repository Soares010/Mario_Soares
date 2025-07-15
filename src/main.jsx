import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import Routed from "./routes/Routed";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Routed />
  </StrictMode>
);
