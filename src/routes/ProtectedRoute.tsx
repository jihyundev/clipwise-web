import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ token }: { token: string }) => {
  if (!token) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return <Outlet />;
};

export { ProtectedRoute };
