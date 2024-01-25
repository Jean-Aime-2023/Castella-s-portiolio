import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SvgComponent from './components/SvgComponent';
import WhoIamI from './components/WhoIamI';
import Work from './components/Work';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhoIamI/>
      <Work/>
      <div className='m-10'>
      <SvgComponent/>
      </div>
    </div>
  );
}

export default App;
