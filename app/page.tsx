import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import StatTicker from "./components/StatTicker";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <StatTicker />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}