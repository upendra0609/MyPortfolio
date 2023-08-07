import "./FooterStyle.css"
import { FaHome, FaPhone,FaMailBulk,FaFacebook,FaLinkedin,FaTwitter } from 'react-icons/fa';

import React from 'react'

const Footer = () => {
    return (
        <div className="container">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>G1 Borate Basti Manjari Apartment chandan nagar</p>
                            <p>Pune, Maharashtra 411014.</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        7772900186
                        </h4>
                    </div>
                    <div className="gmail">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        upendrasatna@gmail.com
                        </h4>
                    </div>
                </div>
                {/* <div className="right">
                    <h4>About</h4>
                    <p></p>
                    <div className="social">
                    <div className="gmail">
                        <FaFacebook size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <FaTwitter size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Footer