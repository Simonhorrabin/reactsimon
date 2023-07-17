import React from "react";
import './portfolio.css';
import Desk1 from "../../assets/desk1.png";

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={Desk1} alt="Portfolio Item" />
                        <h3> Dream Catcher </h3>
                        <a href="https://github.com/Simonhorrabin/Dream_Catcher" className='btn' target='_blank'>GitHub</a>  
                        <a href="https://dribbble.com/Simonhorrabin" className='btn btn-primary' target='_blank'>Dribbble</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={Desk1} alt="Portfolio Item" />
                        <h3> Sip & Scenes </h3>
                        <a href="https://github.com/tigergiangnguyen/sip-and-scenes" className='btn' target='_blank'>GitHub</a>  
                        <a href="https://dribbble.com/Simonhorrabin" className='btn btn-primary' target='_blank'>Dribbble</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={Desk1} alt="Portfolio Item" />
                        <h3>Fit Checker</h3>
                        <a href="https://github.com/rm2023/fit-checker" className='btn' target='_blank'>GitHub</a>  
                        <a href="https://dribbble.com/Simonhorrabin" className='btn btn-primary' target='_blank'>Dribbble</a>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Portfolio;
