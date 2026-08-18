import About from "./components/About";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Flow from "./components/Flow";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Homes from "./components/Homes";
import Instagram from "./components/Instagram";
import Reveal from "./components/Reveal";
import Service from "./components/Service";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Instagram />
      <Service />
      <Homes />
      <Flow />
      <Faq />
      <Contact />
      <Footer />
      <Reveal />
    </>
  );
}
