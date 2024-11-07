import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const navigate = useNavigate();
  const onNavigateToLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="title">
        <img src="/clipwise-default.svg" className="logo" alt="logo" />
        <h1>Home</h1>
      </div>
      <button onClick={onNavigateToLogin}>Login</button>
    </>
  );
};
