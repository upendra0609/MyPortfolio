import './AboutContentStyle.css'
import java1 from '../assets/project1.jpeg'

import React from 'react'
import { Link } from 'react-router-dom';

const AboutContent = () => {
  return (
    <div className='about'>
        <div className="left">
            <h1>Who Am I</h1>
            <p>Im a Full Stack Java Developer. I create secure responsive websites.</p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={java1} className='img' alt='Image'/>
                </div>
                <div className="img-stack bottom">
                    <img src={java1} className='img' alt='Image'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent