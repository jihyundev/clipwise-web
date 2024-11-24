import { UserRoundIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { useLogout } from "@/hooks/useLogout.tsx";
import { WithdrawAlertDialog } from "@/components/user/WithdrawAlertDialog.tsx";
import { useDialogOpenState } from "@/hooks/useDialogOpenState.tsx";

export const UserMenu = () => {
  const { logout } = useLogout();
  const { isOpen: isWithdrawDialogOpen, setIsOpen: setIsWithdrawDialogOpen } =
    useDialogOpenState();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <button className="flex items-center justify-center p-2.5 rounded-full bg-secondary hover:bg-secondary-hover">
            <UserRoundIcon className="text-primary" size={18} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setIsWithdrawDialogOpen(true)}>
            계정 탈퇴
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => logout()}>로그아웃</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <WithdrawAlertDialog
        isOpen={isWithdrawDialogOpen}
        setIsOpen={setIsWithdrawDialogOpen}
      />
    </>
  );
};
