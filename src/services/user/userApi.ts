import { HTTP } from "@/services/http.ts";
import { Auth } from "@/model/auth.ts";

const UserApi = {
  /**
   * 소셜 로그인 요청
   * @param provider
   * @param token
   */
  postSocialLogin({
    provider,
    token,
  }: {
    provider: "google" | "kakao";
    token: string;
  }) {
    return HTTP.post<Auth>("/v1/users/social-login", {
      provider,
      token,
    });
  },

  /**
   * 토큰 갱신 요청
   * @param refreshToken
   */
  postTokenRefresh({ refreshToken }: { refreshToken: string }) {
    return HTTP.post("/v1/users/refresh-token", {
      refreshToken,
    });
  },

  /**
   * 내 정보 조회
   */
  getUser() {
    return HTTP.get("/v1/users/me");
  },

  /**
   * 계정 삭제
   */
  deleteUser({ feedback = "" }: { feedback: string }) {
    return HTTP.delete("/v1/users", {
      data: {
        text: feedback,
      },
    });
  },
};

export { UserApi };
