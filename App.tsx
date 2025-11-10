
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Personas from './components/Personas';
import ObjectionsFaq from './components/ObjectionsFaq';
import RoiCalculator from './components/RoiCalculator';
import Cta from './components/Cta';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-dark-text font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <Personas />
        <RoiCalculator />
        <ObjectionsFaq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default App;
