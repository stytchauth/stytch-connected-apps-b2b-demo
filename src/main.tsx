import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { StytchB2BProvider } from "@stytch/react/b2b";
import { StytchB2BUIClient } from "@stytch/vanilla-js/b2b";
import { BrowserRouter as Router } from "react-router-dom";

// Initialize Stytch
const stytch = new StytchB2BUIClient(import.meta.env.VITE_STYTCH_PUBLIC_TOKEN);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <StytchB2BProvider stytch={stytch}>
      <Router>
        <App />
      </Router>
    </StytchB2BProvider>
  </React.StrictMode>
);
