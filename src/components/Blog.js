import React from 'react'
import { blog } from '../data'

const Blog = () => {
  return (
    <section className='blogs' id='blogs'>
        <h1 className='heading'>
            <span>OUR </span> BLOGS
        </h1>
        <div className='box-container'>
            {
                blog.map((item,index)=>(
                    <div className='box' key={index}>
                        <div className='image'>
                            <img src={item.img} alt='#nothing'/>
                        </div>
                        <div className='content'>
                            <a href='#nothing' className='title'>
                                Tasty and refreshing spices
                            </a>
                            <span>by admin / 21st May, 2023</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, modi?</p>
                            <a href='#nothing' className='btn'>READ MORE</a>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Blog