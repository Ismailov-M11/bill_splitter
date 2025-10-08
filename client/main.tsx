import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";

try {
  /* @ts-ignore */ window.Telegram?.WebApp?.expand?.();
} catch {}

const tg = (window as any).Telegram?.WebApp;
tg?.ready?.();

function applyTgTheme() {
  const p = tg?.themeParams || {};
  if (!p) return;
  if (p.bg_color) document.body.style.backgroundColor = p.bg_color;
  if (p.text_color) document.body.style.color = p.text_color;
}

applyTgTheme();

tg?.onEvent?.("themeChanged", applyTgTheme);

const root = document.getElementById("root");
if (!root) throw new Error("Root element #root not found");
createRoot(root).render(<App />);
