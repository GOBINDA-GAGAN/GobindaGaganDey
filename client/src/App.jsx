import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import ProfileVideo from "./components/video/ProfileVideo";
import Profile from "./components/card/Profile";
import About from "./components/AboutCard/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";

import ProjectsPage from "./pages/ProjectsPage";
import Skill from "./components/skills/Skill";
import Experience from "./experience/Experience";
import ScrolledTooFar from "./components/Contact/CTA";

const Section = ({ children, className = "", id }) => {
  return (
    <section
      id={id}
      className={`relative border-b border-dashed border-border
        before:absolute before:bottom-[-1px] before:right-full
        before:h-px before:w-[50vw]
        before:border-b before:border-dashed before:border-border
        after:absolute after:bottom-[-1px] after:left-full
        after:h-px after:w-[50vw]
        after:border-b after:border-dashed after:border-border
        ${className}`}
    >
      {children}
    </section>
  );
};

const Home = () => {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl border-x border-dashed border-border">
      {/* HERO */}
      <Section id="hero" className="min-h-14">
        <ProfileVideo />
      </Section>

      {/* PROFILE */}
      <Section className="min-h-20">
        <Profile />
      </Section>

      {/* DIVIDER */}
      <Section className="min-h-2 bg-surface" />

      <Section id="about">
        {/* ABOUT */}
        <About />
        {/* CONTACT */}
        <Contact />
      </Section>
      {/* CONTACT */}

      {/* DIVIDER */}
      <Section className="min-h-2 bg-surface">
        {/* PROJECTS */}
        <Projects />
      </Section>

      <Section className="min-h-2 bg-surface" />

      <Section id="skills" className="min-h-50">
        <Skill />
      </Section>
      <Section className="min-h-2 bg-surface"></Section>

      <Section className="min-h-30">
        <Experience />
      </Section>
      <Section className="min-h-2 bg-surface"></Section>
      <Section className="min-h-30">
        <ScrolledTooFar />
      </Section>
      <Section className="min-h-2 bg-surface"></Section>
    </main>
  );
};

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      {/* Navbar appears on EVERY PAGE */}
      <Navbar />

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>

      {/* Footer appears on EVERY PAGE */}
      <Footer />
    </div>
  );
};

export default App;
