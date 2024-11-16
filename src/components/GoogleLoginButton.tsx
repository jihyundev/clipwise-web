import { Button } from "@/components/ui/Button";
import { GoogleIcon } from "@/components/Icons";
import { useSocialLogin } from "@/hooks/useSocialLogin.tsx";

export const GoogleLoginButton = () => {
  const { tryLogin, isPending } = useSocialLogin();

  return (
    <>
      <Button
        variant="outline"
        className="border border-black"
        onClick={() => tryLogin()}
        disabled={isPending}
      >
        <GoogleIcon />
        <span className="text-xs text-gray-600 font-medium">
          Google 계정으로 시작하기
        </span>
      </Button>
    </>
  );
};
