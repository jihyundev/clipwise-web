import { Logo } from "@/components/Logo.tsx";

export const SideBar = () => {
  return (
    <div className="md:w-[310px] h-screen">
      <div className="flex items-center space-x-2 h-[60px]">
        <Logo width={14} height={20} />
        <span className="text-base text-gray-600 font-semibold flex items-center">
          ClipWise
        </span>
      </div>
      <div>Folders Here</div>
    </div>
  );
};
