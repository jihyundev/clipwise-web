import { useWithdrawalMutation } from "@/services/user/useWithdrawalMutation.tsx";
import { useToast } from "@/hooks/useToast.tsx";
import { TokenManager } from "@/services/user/tokenManager.ts";
import { useNavigate } from "react-router-dom";

export const useWithdrawal = () => {
  const { mutate, isPending, isSuccess, isError } = useWithdrawalMutation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const withdraw = (feedback?: string) => {
    mutate(feedback, {
      onSuccess: () => {
        toast({
          title: "회원 탈퇴 완료",
          description: "탈퇴 완료되었습니다.",
        });
        TokenManager.clearAll();
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: "회원 탈퇴 실패",
          description: "탈퇴 처리 중 문제가 발생했습니다. 다시 시도해주세요.",
        });
      },
    });
  };

  return {
    withdraw,
    isPending,
    isSuccess,
    isError,
  };
};
