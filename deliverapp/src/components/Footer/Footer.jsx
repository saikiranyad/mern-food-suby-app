import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src="" alt="" />
                    <p>dummy text</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get in touch</h2>
                    <ul>
                        <li>+1234567890</li>
                        <li>saisaikiran7890@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copy right 2025</p>
        </div>
    )
}

export default Footer
