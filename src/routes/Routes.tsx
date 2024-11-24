import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TokenManager } from "@/services/user/tokenManager.ts";
import { ProtectedRoute } from "./ProtectedRoute.tsx";
import { LoginPage } from "@/pages/LoginPage.tsx";
import { MainPage } from "@/pages/MainPage.tsx";

const accessToken = TokenManager.accessToken;

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
