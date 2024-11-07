import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./LoginPage.tsx";
import { MainPage } from "./MainPage.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
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
