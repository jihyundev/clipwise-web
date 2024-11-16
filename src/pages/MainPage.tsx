import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { SideBar } from "@/components/SideBar.tsx";
import { SearchBar } from "@/components/SearchBar.tsx";
import { UserMenu } from "@/components/UserMenu.tsx";

export const MainPage = () => {
  const navigate = useNavigate();
  const onNavigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="w-full flex px-6 py-2.5">
      <SideBar />
      <div className="w-full">
        <div className="flex items-center justify-center">
          <SearchBar />
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[810px]">
            Main Cards.
            <div className="title">
              <Logo />
            </div>
            <button onClick={onNavigateToLogin}>Login</button>
          </div>
        </div>
      </div>
      <div className="h-[60px] flex items-center">
        <UserMenu />
      </div>
    </div>
  );
};
