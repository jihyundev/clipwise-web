import { useMutation } from "@tanstack/react-query";
import { UserApi } from "@/services/user/userApi";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: UserApi.postSocialLogin,
  });
};
