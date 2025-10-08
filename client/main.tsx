import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";

try { /* @ts-ignore */ window.Telegram?.WebApp?.expand?.(); } catch {}

const root = document.getElementById("root");
if (!root) throw new Error("Root element #root not found");
createRoot(root).render(<App />);
