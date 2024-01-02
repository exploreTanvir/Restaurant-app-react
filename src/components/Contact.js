import React from 'react'

const Contact = () => {
  return (
    <section className='contact' id='contact'>
        <h1 className='heading'>
            <span>CONTACT </span> US
        </h1>
        <div className='row'>
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.3636804192943!2d89.39062653582722!3d23.483406671696926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fef8aebef65e31%3A0xa31ba584b543e71f!2sMagura%20Polytechnic%20Institute!5e0!3m2!1sen!2sbd!4v1704174382457!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" ></iframe>
        <form>
            <h3>Get in touch</h3>
            <div className='inputBox'>
                <span className='fas fa-user'></span>
                <input type='text' placeholder='Name'/>
            </div>
            <div className='inputBox'>
                <span className='fas fa-envelope'></span>
                <input type='email' placeholder='Email'/>
            </div>
            <div className='inputBox'>
                <span className='fas fa-phone'></span>
                <input type='number' placeholder='Number'/>
            </div>
            <input type='submit' value="CONTACT NOW" className='btn'/>
        </form>
        </div>
    </section>
  )
}

export default Contact