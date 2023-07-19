import React from "react";
import './about.css';
import MeImage from '../../assets/me1.jpg';
import { AiFillFolderOpen } from 'react-icons/ai';

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={MeImage} alt="about__image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <AiFillFolderOpen className='about__icon' />
                            <h5>Projects</h5>
                            <small>20+ completed projects</small>
                        </article>
                    </div>

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </p>

                    <a href='#contact' className='btn btn-primary'>Reach Me</a>
                </div>
            </div>
        </section>
    );
}

export default About;
