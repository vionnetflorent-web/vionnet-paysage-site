import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ServiceSection from "@/components/ServiceSection";
import Realisations from "@/components/Realisations";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { services } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      {services.map((service) => (
        <ServiceSection key={service.id} service={service} />
      ))}
      <Realisations />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
