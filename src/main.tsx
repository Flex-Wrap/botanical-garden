import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StoryProvider } from "./StoryContext"; // Import the provider
import "./index.css";
import { NotificationProvider } from "./NotificationContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoryProvider> {/* Wrap the entire app */}
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </StoryProvider>
  </React.StrictMode>
);
