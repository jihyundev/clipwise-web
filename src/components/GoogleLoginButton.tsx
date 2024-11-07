import { useGoogleLogin } from "@react-oauth/google";
import SignUpWithGoogleImage from "../assets/sign-up-with-google.svg";
import styles from "./GoogleLoginButton.module.css";

export const GoogleLoginButton = () => {
  const tryLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: (error) => console.error(error),
  });

  return (
    <>
      <button className={styles.buttonContainer} onClick={() => tryLogin()}>
        <img
          className={styles.buttonImage}
          src={SignUpWithGoogleImage}
          alt={"google login image"}
        />
      </button>
    </>
  );
};
