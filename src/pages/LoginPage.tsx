import { Logo } from "../components/Logo.tsx";
import { GoogleLoginButton } from "../components/GoogleLoginButton.tsx";

export const LoginPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="text-center">
        <div className="flex justify-center items-center gap-2.5 mb-5">
          <Logo width={14} height={20} />
          <h1 className="text-base font-semibold text-gray-600">ClipWise</h1>
        </div>
        <div>
          <p className="text-xs font-medium text-gray-600 mb-8">
            ClipWise는 AI 북마크 서비스 입니다. <br />
            웹페이지를 저장할 때 딱 맞는 폴더를 AI가 추천해드려요. <br />
            검색 기능을 통해 원하는 북마크를 쉽고 빠르게 찾아보세요.
          </p>
          <div>
            <GoogleLoginButton />
          </div>
        </div>
      </div>
    </div>
  );
};
