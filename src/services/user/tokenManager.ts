import Cookies from "js-cookie";

export class TokenManager {
  static get accessToken() {
    return Cookies.get("accessToken") || "";
  }

  static get refreshToken() {
    return Cookies.get("refreshToken") || "";
  }

  static updateTokens({
    accessToken,
    refreshToken,
  }: {
    accessToken: string;
    refreshToken: string;
  }) {
    Cookies.set("accessToken", accessToken);
    Cookies.set("refreshToken", refreshToken);
  }

  static clearAll() {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
  }
}
