import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/AlertDialog";
import { useWithdrawal } from "@/hooks/useWithdrawal.tsx";
import { Textarea } from "@/components/ui/Textarea.tsx";
import { Logo } from "@/components/Logo";
import { useState } from "react";

export const WithdrawAlertDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { withdraw, isPending } = useWithdrawal();
  const [feedbackInput, setFeedbackInput] = useState("");

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-1 mb-5 text-gray-600">
            <Logo width={14} height={20} />
            계정 탈퇴
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-gray-600">
            사용하신 계정 정보와 저장된 북마크를 모두 삭제합니다. <br />
            이용하시면서 불편했던 점이나 개선할 부분이 있었다면 아래에
            남겨주세요. <br />
            소중한 의견을 반영해 더 나은 ClipWise가 되도록 노력하겠습니다.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div>
          <Textarea
            placeholder="사용하시면서 느끼신 점을 자유롭게 남겨 주세요."
            onChange={(e) => setFeedbackInput(e.target.value)}
          />
        </div>
        <AlertDialogFooter className="sm:justify-center">
          <AlertDialogCancel>닫기</AlertDialogCancel>
          <AlertDialogAction
            disabled={isPending}
            onClick={() => withdraw(feedbackInput)}
          >
            계정 탈퇴
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
