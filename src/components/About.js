import React from 'react'
import aboutImg from "../Asset/images/about-img.jpeg"
const About = () => {
  return (
    <>
    <section className='about' id='about'>
        <h1 className='heading'>
            <span>About</span> us
        </h1>
        <div className='row'>
            <div className='image'>
                <img src={aboutImg} alt=''/>
            </div>
            <div className='content'>
                <h3>what makes our food special?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae ratione a officiis id temporibus autem? Quod nemo facilis cupiditate. Ex, vel?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit amet enim quod veritatis, nihil voluptas culpa! Neque consectetur obcaecati sapiente?</p>
                <a href='#nothing' className='btn'>LEARN MORE</a>
            </div>
        </div>
    </section>
    </>
  )
}

export default About