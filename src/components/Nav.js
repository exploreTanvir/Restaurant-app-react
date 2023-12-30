import { React, useRef } from 'react'

import logo from "../Asset/images/logo.png"
import { cart } from '../data'
const Nav = () => {
  const searchRef=useRef()
  const cartRef=useRef()
  const navRef=useRef()
  const searchHandler=()=>{
      searchRef.current.classList.toggle("active")
      cartRef.current.classList.remove("active")
      navRef.current.classList.remove("active")
  }
  const cartHandler=()=>{
    cartRef.current.classList.toggle("active")
    searchRef.current.classList.remove("active")
    navRef.current.classList.remove("active")
  }
  const navbarHandler=()=>{
    navRef.current.classList.toggle("active")
    searchRef.current.classList.remove("active")
    cartRef.current.classList.remove("active")
  }
  return (
    <>
       <header  className='header' >
        <a href='/' className='logo'>
            <img src={logo} alt='#'/>
            </a>
            <nav className='navbar' ref={navRef}>
            <a href='#home'>home</a>
            <a href='#about'>about</a>
            <a href='#menu'>menu</a>
            <a href='#product'>product</a>
            <a href='#review'>review</a>
            <a href='#contact'>contact</a>
            <a href='#blogs'>blogs</a>
                </nav>  
                <div className='icons'>
                <div className='fas fa-search' onClick={searchHandler}></div>
                <div className='fas fa-shopping-cart' onClick={cartHandler}></div>
                <div className='fas fa-bars' id='menu-btn' onClick={navbarHandler}></div>
                </div> 

                <div className='search-form' ref={searchRef}>
                  <input type='search' placeholder='Search here' id='search-box'/>
                  <label htmlFor='search-box' className='fas fa-search'></label>
                  </div>   


                  <div className='cart-items-container' ref={cartRef}>
                    {
                      cart.map(
                        (item,index)=>(
                          <div className='cart-item' key={index}>
                            <img src={item.img} alt='#'/>
                            <span className='fas fa-times'></span>
                            <div className='content'>
                              <h3>cart item 01</h3>
                              <div className='price'>$15.99/-</div>
                            </div>
                          </div>
                        )
                      )
                    }
                    <a className='btn' href='#nothing'>CHEAKOUT NOW</a>
                    </div>  
            </header> 

    </>
  )
}

export default Nav