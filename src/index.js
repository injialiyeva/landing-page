import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@react-spectrum/provider";
import "./index.css";
import "./App.css";
import App from "./App";
import { store } from "./store/Store";
import { Provider as ProviderRedux } from "react-redux";

const root = createRoot(document.getElementById("root"));

root.render(
  <ProviderRedux store={store}>
    <App />
  </ProviderRedux>
);
