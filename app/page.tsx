import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import ComboBanner from "./components/ComboBanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <ComboBanner />
      </main>
      <Footer />
    </>
  );
}
