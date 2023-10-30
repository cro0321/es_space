
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import Skill from './components/Skill';
import { Router } from 'react-router-dom';
import Footer from './components/Footer';
import Orbit from './components/Orbit';
import Space from './components/Space';


function App() {
  return (
<>

<Nav/>
<Orbit/>
<Space/>
{/* <About/>
<Project/>
<Skill/>
<Footer/> */}
</>
  );
}

export default App;
