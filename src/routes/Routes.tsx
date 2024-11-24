import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cookies from "js-cookie";
import { ProtectedRoute } from "./ProtectedRoute.tsx";
import { LoginPage } from "@/pages/LoginPage.tsx";
import { MainPage } from "@/pages/MainPage.tsx";

const accessToken = Cookies.get("accessToken") || "";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute token={accessToken} />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);

const Routes = () => {
  return <RouterProvider router={routes} />;
};

export { Routes };
