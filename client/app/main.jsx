import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./globals.css";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const hasValidClerkKey = Boolean(clerkPubKey) && clerkPubKey.startsWith("pk_");

if (!hasValidClerkKey) {
    console.warn(
        "Missing or invalid VITE_CLERK_PUBLISHABLE_KEY. App is running without Clerk auth."
    );
}

const appTree = (
    <HashRouter>
        <App />
    </HashRouter>
);

ReactDOM.createRoot(document.getElementById("root")).render(
    hasValidClerkKey ? (
        <ClerkProvider publishableKey={clerkPubKey}>{appTree}</ClerkProvider>
    ) : (
        appTree
    )
);
