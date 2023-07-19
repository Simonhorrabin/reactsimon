import React from "react";
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <header>
          <div className="container header__container">
            <h5>Hello my name is</h5>
            <h1>Simon Horrabin</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <HeaderSocials />
            <CTA></CTA>


            <div className="me">
                <img src={ME} alt="me" style={{ width: '200px', height: '240px', border: '5px inset black'}}/>
            </div>

            <a href="#contact" className='scroll__down'>Scroll Down</a>
          </div>   

        </header>
    );
}

export default Header;
