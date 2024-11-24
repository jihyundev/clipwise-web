import { useNavigate } from "react-router-dom";
import { Logo } from "@/components/Logo.tsx";

export const SideBar = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  return (
    <div className="w-1/3 md:w-[310px] h-screen">
      <button
        className="flex items-center space-x-2 w-full h-[60px] border-b mb-2"
        onClick={() => navigate("/")}
      >
        <Logo width={14} height={20} />
        <span className="text-base text-gray-600 font-semibold flex items-center">
          ClipWise
        </span>
      </button>
      <div>{children}</div>
    </div>
  );
};
