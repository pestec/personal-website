import AnimatedBackground from "./components/ui/AnimatedBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Background from "./components/Background";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Background />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
