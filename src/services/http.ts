import axios from "axios";
import { TokenManager } from "@/services/user/tokenManager.ts";

const instance = axios.create({
  baseURL: "https://third-brain-tting.kro.kr/clip-wise",
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

const refreshTokens = async () => {
  const refreshToken = TokenManager.refreshToken;
  try {
    const response = await instance.post("/v1/users/refresh-token", {
      refreshToken,
    });
    const newAccessToken = response.data.accessToken;
    const newRefreshToken = response.data.refreshToken;
    TokenManager.updateTokens({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
    return newAccessToken;
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw error;
  }
};

instance.interceptors.request.use(
  (config) => {
    const accessToken = TokenManager.accessToken;
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    // 토큰이 만료된 경우
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true; // 재요청 방지
      try {
        const newAccessToken = await refreshTokens();
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return axios(originalRequest);
      } catch (refreshError) {
        console.error("Error refreshing token:", refreshError);
        throw refreshError;
      }
    }

    return Promise.reject(error);
  },
);

export { instance as HTTP };
