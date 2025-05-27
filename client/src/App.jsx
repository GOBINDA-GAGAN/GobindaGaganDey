import React from "react";
import HeroPage from "./pages/HeroPage";
import Navbar from "./components/navbar/Navbar";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillPage from "./pages/SkillPage";
import AnonymousWallPage from "./pages/AnonymousWallPage";
import Footer from "./components/footer/Footer";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="snap-y snap-mandatory overflow-y-hidden  scroll-smooth">
        <section id="hero" className="snap-start">
          <HeroPage />
        </section>
        <section id="about" className="snap-start">
          <AboutPage />
        </section>
        <section id="projects" className="snap-start">
          <ProjectsPage />
        </section>
        <section id="skills" className="snap-start">
          <SkillPage />
        </section>
        <section id="mystery" className="snap-start">
          <AnonymousWallPage />
        </section>
        <section id="contact" className="snap-start">
          <Contact />
        </section>
      </div>

      <Footer />
    </>
  );
};

export default App;
