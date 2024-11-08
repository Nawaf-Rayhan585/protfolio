import React from 'react'
import './About.css'
import man from '../../images/imafess3.png'
import { IoMdTime } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa";

const About = () => {
  return (
    <section id='about' className='about-container'>
      <h5 className='heading'>About Me</h5>
      <div className="container about__container">
         <div className="about__me">
            <div className="about__me-image">
            <img src={man} alt="My-Image" className='My-Image'/>
            </div>
         </div>

         <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <IoMdTime className='about__icon'/>
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className='about__card'>
              <FaRegFolder className='about__icon'/>
                <h5>Projects</h5>
                <small>35+ Projects</small>
              </article>

              <article className='about__card'>
              <FaRegUser className='about__icon'/>
                <h5>Clients</h5>
                <small>0</small>
              </article>
            </div>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, excepturi? Delectus optio, ipsum magnam fugiat exercitationem laudantium necessitatibus, blanditiis sed, iusto autem totam corporis? Repellat voluptate sint hic inventore dolorem!
            </p>

            <button className='btn'><a href="#contact">Let's Talk</a></button>

         </div>
      </div>
    </section>
  )
}

export default About