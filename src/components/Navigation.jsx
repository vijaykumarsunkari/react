import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Update from "./Update";


export default function Navigation()
{
    const router=createBrowserRouter([
        {path:'/',element:<App />},
        {path:'/update',element:<Update />},
    ]
    );
    return <RouterProvider router={router} />;
}