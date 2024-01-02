import React from 'react';
import './App.css';
import './Asset/style.css';
import About from './components/About';
import Home from './components/Home';
import Menu from './components/Menu';
import Nav from './components/Nav';
import Product from './components/Product';
import Review from './components/Review';
import Contact from './components/Contact';
import Blog from './components/Blog';


const App = () => {
  return (
    <div>
    <Nav/> 
    <Home/>
    <About/>
    <Menu/>
    <Product/>
    <Review/>
    <Blog/>
    <Contact/>
    </div>
  )
}

export default App