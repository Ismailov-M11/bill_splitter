import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";

// Тип безопасного доступа к Telegram WebApp
type Tg = {
  WebApp?: {
    ready: () => void;
    onEvent?: (event: string, cb: () => void) => void;
    // themeParams и др. нам не нужны — мы всегда форсим light
  };
};

const tg = (window as unknown as { Telegram?: Tg })?.Telegram?.WebApp;

// Сообщаем Telegram, что мини-апп готово
tg?.ready?.();

/**
 * ВАЖНО: форсим светлую тему, даже если у пользователя тёмная
 * 1) фиксируем data-theme="light"
 * 2) color-scheme: light — влияет на системные виджеты/скролл
 * 3) отписываемся от themeChanged, чтобы Телеграм не подменял цвета
 */
document.documentElement.setAttribute("data-theme", "light");
(document.documentElement.style as any).colorScheme = "light";

// Если Telegram попытается прислать themeChanged — игнорируем
tg?.onEvent?.("themeChanged", () => {
  document.documentElement.setAttribute("data-theme", "light");
  (document.documentElement.style as any).colorScheme = "light";
});

// Рендер приложения
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
