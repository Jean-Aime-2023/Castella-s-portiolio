import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoIamI from './components/WhoIamI';
import Work from './components/Work';
import Language from './components/Languages';
import Examples from './components/Examples';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HorizontalScroller from './components/HorizontalScroller';

const HomePage = () => {
  return (
    <div className="relative">
      <Navbar />
      <Sidebar />
      <Hero />
      <WhoIamI />
      <Work />
      <Language />
      <HorizontalScroller/>
      <Examples />
      <Footer />
    </div>
  );
};

function App() {
  return (
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;