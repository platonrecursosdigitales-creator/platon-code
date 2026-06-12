import Plans from "@/components/site/Plans";
import Conditions from "@/components/site/Conditions";
import FAQ from "@/components/site/FAQ";
import { useSiteContext } from "@/components/site/SiteLayout";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const PreciosPage = () => {
  const { openAgenda } = useSiteContext();
  return (
    <>
      <Plans onAgenda={openAgenda} />
      <Conditions />
      <FAQ />
    </>
  );
};

export default PreciosPage;