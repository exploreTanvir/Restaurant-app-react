import React from 'react';
import { menu } from '../data';
const Menu = () => {
  return (
    <section className='menu' id='menu'>
        <h1 className='heading'>
            <span>OUR </span> MENU
        </h1>
        <div className='box-container'>
        {
                      menu.map(
                        (item,index)=>(
                          <div className='box' key={index}>
                            <img src={item.img} alt='#'/>
                            <h3>Tasty and healthy</h3>
                            <div className='price'>
                                $15.99 <span>20.99</span>
                            </div>
                            <a href='#nothing' className='btn'>ADD TO CART</a>
                          </div>
                        )
                      )
                    }
        </div>
    </section>
  )
}

export default Menu