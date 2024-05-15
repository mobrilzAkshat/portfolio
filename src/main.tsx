import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./AppRoutes.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrimeReactProvider>
        <AppRoutes />
      </PrimeReactProvider>
    </BrowserRouter>
  </React.StrictMode>
);
