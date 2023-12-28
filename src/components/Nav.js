import React from 'react'
import logo from "../Asset/images/logo.png"
const Nav = () => {
  return (
    <>
       <header  className='header'>
        <a href='#' className='logo'>
            <img src={logo} alt='#'/>
            </a>
            <nav className='navbar'>
            <a href='#home'>home</a>
            <a href='#about'>about</a>
            <a href='#menu'>menu</a>
            <a href='#product'>product</a>
            <a href='#review'>review</a>
            <a href='#contact'>contact</a>
            <a href='#blogs'>blogs</a>
                </nav>  
                <div className='icons'>
                <div className='fas fa-search'></div>
                <div className='fas fa-shopping-cart'></div>
                <div className='fas fa-bars' id='menu-btn'></div>
                </div>      
            </header> 

    </>
  )
}

export default Nav