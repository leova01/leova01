import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import About from "./components/About";
import Stack from "./components/stack";
import FadeInOnScroll from "./components/ui/FadeInOnScroll";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-dark" suppressHydrationWarning>
      <Navbar />
      <FadeInOnScroll delay={0}>
        <Hero />
      </FadeInOnScroll>
      <FadeInOnScroll delay={0}>
        <About />
      </FadeInOnScroll>
      <FadeInOnScroll delay={0}>
        <Stack />
      </FadeInOnScroll>
      <FadeInOnScroll delay={0}>
        <Experience />
      </FadeInOnScroll>
      <FadeInOnScroll delay={0}>
        <Contact />
      </FadeInOnScroll>
    </main>
  );
}
