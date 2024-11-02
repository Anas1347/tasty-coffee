import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import MainLayout from "../components/MainLayout/MainLayout";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>
    },
  ]);
  


export default router;