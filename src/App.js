import './App.css';
import Examples from './components/Examples';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Languages from './components/Languages';
import Navbar from './components/Navbar';
import Other from './components/Other';
import Projects from './components/Projects';
// import Recent from './components/Recent';
import WhoIamI from './components/WhoIamI';
import Work from './components/Work';
import styled from 'styled-components'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhoIamI/>
      <Work/>
      <Languages/>
      {/* <Recent/> */}
      {/* <Project>
      <Projects/>
      </Project> */}

      <Other/>
      <Examples/>
      <Footer/>
    </div>
  );
}

export default App;


const Project = styled.div`
   background: linear-gradient(159deg, rgb(45,45,58) 0%, rgb(43,43,53) 100%);
`