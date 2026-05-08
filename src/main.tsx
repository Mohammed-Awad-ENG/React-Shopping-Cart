import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Home from "./components/Home.tsx";
import Store from "./components/Store.tsx";
import About from "./components/About.tsx";

const rooter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/store", element: <Store /> },
            { path: "/about", element: <About /> },
        ],
    },
]);
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={rooter} />
    </StrictMode>,
);
