import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

export const MainPage = () => {
  const navigate = useNavigate();
  const onNavigateToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="title">
        <Logo />
      </div>
      <button onClick={onNavigateToLogin}>Login</button>
    </>
  );
};
