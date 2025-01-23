import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About'; // Create these components as needed
import Contact from './components/Contact';
import Careers from './components/Careers';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Careers />
      <Footer />
    </div>
  );
};

export default App;
