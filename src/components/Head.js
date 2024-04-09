import React from 'react';
import img from '../assets/profile2.jpg';
import wave from '../assets/waving.png';
import './Head.css';
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import Resume from "../assets/RESUME.pdf"


function Head() {
  return (
    <section id='Head'>
<div className='head'>
  
  <div className='text'>
   <h1>Full Stack MERN<br></br> Developer <img className='hand' src={wave}/></h1>
   <p>
                  "Hi,I'm Vinay Amireddy . 
                 
                  <br></br>A passionate Full Stack Web Developer
                  from Hyderabad,India"
                </p>
                <div>
      <div className="btn-container">
        <button className="btn btn-color-2" 
       onClick={() => window.open(Resume, '_blank')}>
          Download CV
        </button>
        {/* <button className="btn btn-color-2">
  <a href={Resume} target="_blank" rel="noopener noreferrer">
    Download CV
  </a>
</button> */}

      </div>
      <div id="socials-container">
      <img
          src={linkedin}
          alt="My LinkedIn profile"
          class="headicon"
          onClick={() =>
            (window.location.href = "https://www.linkedin.com/in/vinayamireddy")
          }
        />
        <img
          src={github}
          alt="My Github profile"
          class="headicon"
          onClick={() =>
            (window.location.href = "https://github.com/vinayreddy17")
          }
        />
      </div>
    </div>
                </div>
                <div className='image'>
  <img class ='profilePhoto' src={img} alt='profile Photo'/>
  </div>
</div>
    </section>
  )
}

export default Head