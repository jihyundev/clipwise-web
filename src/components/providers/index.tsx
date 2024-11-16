import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryProvider } from "@/components/providers/QueryProvider.tsx";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProvider>
      <GoogleOAuthProvider
        clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}
      >
        {children}
      </GoogleOAuthProvider>
    </QueryProvider>
  );
};
