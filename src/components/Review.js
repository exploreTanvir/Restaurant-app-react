import React from 'react'
import quoteImg from "../Asset/images/quote-img.png"
import { review } from '../data'
const Review = () => {
  return (
    <section className='review' id='review'>
        <h1 className='heading'>
            <span>CUSTOMER'S </span> REVIEW
        </h1>
        <div className='box-container'>
            {
                review.map((item,index)=>(
                    <div className='box'>
                        <img src={quoteImg} alt='#nothing'/>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? 
                        </p>
                        <img src={item.img} alt='#nothing' className='user'/>
                        <h3>John doe </h3>
                        <div className='stars'>
                        <i className='fas fa-star'/>
                        <i className='fas fa-star'/>
                        <i className='fas fa-star'/>
                        <i className='fas fa-star'/>
                        <i className='fas fa-star-half-alt'/>
                        </div>
                    </div>
                    
                ))
            }
        </div>
    </section>
  )
}

export default Review