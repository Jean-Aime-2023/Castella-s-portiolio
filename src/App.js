import './App.css';
import Examples from './components/Examples';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Languages from './components/Languages';
import Navbar from './components/Navbar';
// import Recent from './components/Recent';
import WhoIamI from './components/WhoIamI';
import Work from './components/Work';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhoIamI/>
      <Work/>
      <Languages/>
      {/* <Recent/> */}
      <Examples/>
      <Footer/>
    </div>
  );
}

export default App;
