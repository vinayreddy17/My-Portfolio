import React from 'react'
import mern from '../assets/fullstack.jpeg'
import './About.css'

function About() {
  return (
    <section id='About'>
    <div className='Aboutme'>
       <h1>ABOUT ME</h1>
       <img className='mern_image'src={mern}>
       </img>
       <p>"Greetings! I'm Vinay, a passionate full-stack developer with a BTech degree from NIT Nagpur.<br /> I thrive on challenges and excel in the MERN stack. Let's innovate together and build something extraordinary!"</p>

      

    </div>
    </section>
  )
}

export default About