import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteLayout from "./components/site/SiteLayout";
import Inicio from "./pages/Inicio.tsx";
import NosotrosPage from "./pages/Nosotros.tsx";
import SolucionesPage from "./pages/Soluciones.tsx";
import PreciosPage from "./pages/Precios.tsx";
import CasoPage from "./pages/Caso.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/soluciones" element={<SolucionesPage />} />
            <Route path="/precios" element={<PreciosPage />} />
            <Route path="/caso" element={<CasoPage />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
