import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoIamI from './components/WhoIamI';
import Work from './components/Work';
import Language from './components/Languages';
import Examples from './components/Examples';
import Footer from './components/Footer';
import SwipperComponent from './components/Swiper';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhoIamI />
      <Work />
      <Language />
      <SwipperComponent/>
      <Examples />
      <Footer />
    </div>
  );
}

export default App;
