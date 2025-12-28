import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Specialities from "./components/Specialities";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Particles from "./components/Particles";
import Skills from "./components/Skills";
export default function App() {
  return (
    <>
      <Particles />
      <Navbar />

      <Hero />
      <Skills />
      <Specialities />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
