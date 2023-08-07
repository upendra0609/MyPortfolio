import './HeroImageStyle.css'

import React from 'react'
import { Link } from 'react-router-dom';

import IntroImg from '../assets/background.jpg'

const HeroImage = () => {
  return (
    <div className='hero'>
        <div className="mask">
            <img className='into-img' src={IntroImg} alt='IntroImg'/>
        </div>
        <div className='content'>
            <p>HI, I'M Upendra singh,</p>
            <h1>Full Stack Java Developer.</h1>
            <div>
                <Link to="/project" className="btn">PROJECTS</Link>
                <Link to="/contact" className="btn-btn-light">CONTACT</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage