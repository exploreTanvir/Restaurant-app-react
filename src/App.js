import React from 'react';
import './App.css';
import './Asset/style.css';
import About from './components/About';
import Home from './components/Home';
import Menu from './components/Menu';
import Nav from './components/Nav';


const App = () => {
  return (
    <div>
    <Nav/> 
    <Home/>
    <About/>
    <Menu/>
    </div>
  )
}

export default App