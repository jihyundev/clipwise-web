import { useNavigate } from "react-router-dom";
import { TokenManager } from "@/services/user/tokenManager.ts";

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    TokenManager.clearAll();
    navigate("/login");
  };

  return {
    logout,
  };
};
