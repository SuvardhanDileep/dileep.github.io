import React from 'react';
import Layout from './components/Layout/Layout';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Projects from './components/Sections/Projects';
import Skills from './components/Sections/Skills';
import Publications from './components/Sections/Publications';
import Contact from './components/Sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Publications />
      <Contact />
    </Layout>
  );
}

export default App;