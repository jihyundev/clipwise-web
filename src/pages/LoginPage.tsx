import defaultLogo from "/clipwise-default.svg";
import { GoogleLoginButton } from "../components/GoogleLoginButton.tsx";

export const LoginPage = () => {
  return (
    <>
      <div className="title">
        <img src={defaultLogo} className="logo" alt="logo" />
        <h1>ClipWise</h1>
      </div>

      <div className="description">
        <p>
          ClipWise는 AI 북마크 서비스 입니다. <br />
          웹페이지를 저장할 때 딱 맞는 폴더를 AI가 추천해드려요. <br />
          검색 기능을 통해 원하는 북마크를 쉽고 빠르게 찾아보세요.
        </p>
        <p>Google 계정으로 간편하게 시작해보세요!</p>
        <div>
          <GoogleLoginButton />
        </div>
      </div>
    </>
  );
};
