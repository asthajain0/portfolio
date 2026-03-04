import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
