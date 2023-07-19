import React from "react"
import './footer.css'
import { FaFacebookF } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { AiFillGithub } from "react-icons/ai"

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Simon</a>

            <ul className='permalinks'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>              
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/simon.horrabin.71"><FaFacebookF/></a>
                <a href="https://www.instagram.com/simon_horrabin19/"><FiInstagram/></a>
                <a href="https://github.com/Simonhorrabin">< AiFillGithub /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Made with love in the 4👑 </small>
            </div>

        </footer>
        
    )
}

export default Footer