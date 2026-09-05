import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Treescaping from "@/components/Treescaping";
import WhyTarzan from "@/components/WhyTarzan";
import Equipment from "@/components/Equipment";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import ServiceArea from "@/components/ServiceArea";
import SpecialServicesCTA from "@/components/SpecialServicesCTA";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Treescaping />
      <WhyTarzan />
      <Equipment />
      <Portfolio />
      <Reviews />
      <About />
      <ServiceArea />
      <SpecialServicesCTA />
      <Contact />
      <FinalCTA />
    </>
  );
}
