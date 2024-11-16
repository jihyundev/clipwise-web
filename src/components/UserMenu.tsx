import { UserRoundIcon } from "lucide-react";

export const UserMenu = () => {
  return (
    <button className="flex items-center justify-center p-2.5 rounded-full bg-secondary hover:bg-secondary-hover">
      <UserRoundIcon className="text-primary" size={18} />
    </button>
  );
};
