import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />); // App 컴포넌트 -> root 컴포넌트 (최상위 컴포넌트)
