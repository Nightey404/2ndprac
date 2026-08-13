import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import "./App.css";
import A from "./components/a";
import Register2 from "./components/register2";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/a" element={<A />} />
        <Route path="/register2" element={<Register2 />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
