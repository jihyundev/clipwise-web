import "./App.css";
import { Routes } from "./pages/Routes.tsx";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/Toaster.tsx";

function App() {
  return (
    <Providers>
      <Routes />
      <Toaster />
    </Providers>
  );
}

export default App;
