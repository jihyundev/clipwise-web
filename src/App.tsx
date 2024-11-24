import "./App.css";
import { Routes } from "@/routes/Routes";
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
