import axios from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: "https://third-brain-tting.kro.kr/clip-wise",
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("accessToken");
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { instance as HTTP };
