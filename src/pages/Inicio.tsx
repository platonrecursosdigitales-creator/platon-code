import Hero from "@/components/site/Hero";
import { useSiteContext } from "@/components/site/SiteLayout";

const Inicio = () => {
  const { openAgenda, loaded } = useSiteContext();
  return (
    <>
      <Hero onAgenda={openAgenda} loaded={loaded} />
    </>
  );
};

export default Inicio;