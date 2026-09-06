import Hero from "@/components/Hero";
import ThenAndNow from "@/components/ThenAndNow";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Story from "@/components/Story";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import EmergencyCTA from "@/components/EmergencyCTA";
import Contact from "@/components/Contact";
import ClosingCTA from "@/components/ClosingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ThenAndNow />
      <Services />
      <Process />
      <Story />
      <Gallery />
      <Testimonials />
      <ServiceArea />
      <EmergencyCTA />
      <Contact />
      <ClosingCTA />
    </>
  );
}
