
import './App.css';
import Nav from './components/Nav';
import Square from './components/Square';
import About from './components/About';
import Project from './components/Project';
import Skill from './components/Skill';
import { Router } from 'react-router-dom';

function App() {
  return (
<>

<Nav/>
<Square/>
<About/>
<Project/>
<Skill/>
</>
  );
}

export default App;
