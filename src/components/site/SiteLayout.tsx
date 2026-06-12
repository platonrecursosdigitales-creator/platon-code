import { useEffect, useState } from "react";
import { Outlet, useLocation, useOutletContext } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/site/Preloader";
import Navbar from "@/components/site/Navbar";
import ScrollProgress from "@/components/site/ScrollProgress";
import Footer from "@/components/site/Footer";
import AgendaModal from "@/components/site/AgendaModal";

const SiteLayout = () => {
  const [loaded, setLoaded] = useState(false);
  const [agendaOpen, setAgendaOpen] = useState(false);
  const openAgenda = () => setAgendaOpen(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-bone text-ink overflow-x-hidden selection:bg-brand selection:text-bone flex flex-col">
      <AnimatePresence>{!loaded && <Preloader onDone={() => setLoaded(true)} />}</AnimatePresence>
      <Navbar onAgenda={openAgenda} />
      <ScrollProgress />
      <main className="flex-1">
        <Outlet context={{ openAgenda, loaded }} />
      </main>
      <Footer />
      <AgendaModal open={agendaOpen} onClose={() => setAgendaOpen(false)} />
    </div>
  );
};

export const useSiteContext = () =>
  useOutletContext<{ openAgenda: () => void; loaded: boolean }>();

export default SiteLayout;