import "./App.css";
import { Routes } from "./pages/Routes.tsx";
import { Providers } from "@/components/providers";

function App() {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
}

export default App;
