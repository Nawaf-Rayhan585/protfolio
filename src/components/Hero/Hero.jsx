import React from 'react'
import './Hero.css'
import react from '../../images/react.png'
import man from '../../images/imafess3.png'
import '../../App.css'

const Hero = () => {
return (
    <section className='hero-container'>
        <div className="hero-content">
            <h2>I'm Frontend Devoloper</h2>
            <p>
                Passionate Frontend | Backend | MERN Developer..Transforming Ideas into Seemless and Visually Stunning Web Solutions
            </p>
        </div>

        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src={react} alt="" width='100px'/>
                </div>
                    <img src={man} className='
                    img_man' alt=""  width='600px'/>
            </div>

            <div>
                <div className="tech-icon">
                    <img src='https://www.svgrepo.com/show/303206/javascript-logo.svg' alt="" width='100px' style={{borderRadius:5}}/>
                </div>
                <div className="tech-icon">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png?20170517184425' alt="" width='100px'/>
                </div>
                <div className="tech-icon">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png' alt="" width='100px'/>
                </div>
                <div className="tech-icon">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' alt="" width='100px'/>
                </div>
            </div>
        </div>

    </section>
)
}

export default Hero