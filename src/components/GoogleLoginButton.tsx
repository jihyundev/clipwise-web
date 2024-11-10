import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "@/components/ui/Button.tsx";
import { GoogleIcon } from "@/components/Icons.tsx";

export const GoogleLoginButton = () => {
  const tryLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: (error) => console.error(error),
  });

  return (
    <>
      <Button
        variant="outline"
        className="border border-black"
        onClick={() => tryLogin()}
      >
        <GoogleIcon />
        <span className="text-xs">Google 계정으로 시작하기</span>
      </Button>
    </>
  );
};
