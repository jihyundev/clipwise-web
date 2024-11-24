import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { useToast } from "@/hooks/useToast.tsx";
import { useLoginMutation } from "@/services/user/useLoginMutation.tsx";
import { TokenManager } from "@/services/user/tokenManager.ts";

export const useSocialLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { mutate, isPending, isSuccess, isError } = useLoginMutation();

  // NOTE: 현재 Google 로그인만 지원
  const tryLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      handleGoogleAuthSuccess(tokenResponse.access_token);
    },
    onError: () => {
      handleError();
    },
  });

  const handleGoogleAuthSuccess = (googleAuthToken: string) => {
    mutate(
      { provider: "google", token: googleAuthToken },
      {
        onSuccess: (data) => {
          const { accessToken, refreshToken } = data.data;
          TokenManager.updateTokens({
            accessToken,
            refreshToken,
          });

          setTimeout(() => {
            navigate("/");
          }, 1000);
        },
        onError: () => {
          handleError();
        },
      },
    );
  };

  const handleError = () => {
    toast({
      variant: "destructive",
      title: "로그인 실패",
      description: "로그인 중 문제가 발생했습니다. 다시 시도해주세요.",
    });
  };

  return {
    tryLogin,
    isPending,
    isSuccess,
    isError,
  };
};
