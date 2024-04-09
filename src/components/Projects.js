import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Projects.css'

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const data = [
    {
      name: `John Morgan`,
      img: '',
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Ellie Anderson`,
      img: ``,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Nia Adebayo`,
      img: ``,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Rigo Louie`,
      img: ``,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
      name: `Mia Williams`,
      img: ``,
      review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    }
  ];

  return (
    <section id="Projects">
    <div className="project-container">
      <h1>My Projects</h1>
      <div className="project-slider">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="project-card">
              <div className='project-image'>
                <img src={d.img} alt="" className="project-img"/>
              </div>

              <div className="project-details">
                <p className="project-name">{d.name}</p>
                <p className="project-review">{d.review}</p>
                <button className='project-button'>Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </section>
  );
}

export default Projects;
