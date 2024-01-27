import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoIamI from './components/WhoIamI';
import Work from './components/Work';
import Language from './components/Languages';
import Examples from './components/Examples';
import Footer from './components/Footer';
import RecentWork from './components/RecentWork';
import Slick from './components/Slick';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhoIamI />
      <Work />
      <Language />
      {/* <RecentWork/> */}
      <Slick/>
      <Examples />
      <Footer />
    </div>
  );
}

export default App;
