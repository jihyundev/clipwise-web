import { Logo } from "../components/Logo.tsx";
import { GoogleLoginButton } from "../components/GoogleLoginButton.tsx";

export const LoginPage = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-3.5 mb-10">
        <Logo />
        <h1 className="text-3xl">ClipWise</h1>
      </div>

      <div>
        <p className="text-2xl mb-4">
          ClipWise는 AI 북마크 서비스 입니다. <br />
          웹페이지를 저장할 때 딱 맞는 폴더를 AI가 추천해드려요. <br />
          검색 기능을 통해 원하는 북마크를 쉽고 빠르게 찾아보세요.
        </p>
        <p className="text-2xl mb-7">Google 계정으로 간편하게 시작해보세요!</p>
        <div>
          <GoogleLoginButton />
        </div>
      </div>
    </>
  );
};
