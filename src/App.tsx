import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import { Routes } from "./pages/Routes.tsx";

function App() {
  return (
    <>
      <GoogleOAuthProvider
        clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}
      >
        <Routes />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
