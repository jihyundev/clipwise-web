import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserApi } from "@/services/user/userApi.ts";

export const useWithdrawalMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (feedback?: string) =>
      UserApi.deleteUser({
        feedback: feedback || "",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};
