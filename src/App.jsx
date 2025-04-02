import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";
import FirstPage from "./page/FirstPage";
import Home from "./page/Home";
import Owner from "./page/Owner";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {path: "/", element: <FirstPage />},
            {path: "home", element: <Home />},
            {path: "owner", element: <Owner />},
        ]
    }
]);

export const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}