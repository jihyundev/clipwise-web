import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserApi } from "@/services/user/userApi";

export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: UserApi.postSocialLogin,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};
