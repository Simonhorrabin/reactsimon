import React from "react";
import './experience.css';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Experience = () => {
    return (
        <section id='experience'>
            <h5>Skills</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
               
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <article className='experience__details'>
                        <AiOutlineCheckCircle className='experience__icon' />
                        <h4>HTML</h4>
                        <small className='text-light'>Experienced</small>
                       
                    </article>
                    <article className='experience__details'>
                        <AiOutlineCheckCircle className='experience__icon' />
                        <h4>React</h4>
                        <small className='text-light'>Experienced</small>
                        
                    </article>
                    <article className='experience__details'>
                        <AiOutlineCheckCircle className='experience__icon' />
                        <h4>CSS</h4>
                        <small className='text-light'>Experienced</small>
                        
                    </article>
                    <article className='experience__details'>
                        <AiOutlineCheckCircle className='experience__icon' />
                        <h4>Javascript</h4>
                        <small className='text-light'>Experienced</small>
                        
                    </article>
                    <article className='experience__details'>
                        <AiOutlineCheckCircle className='experience__icon' />
                        <h4>Bootstrap</h4>
                        <small className='text-light'>Experienced</small>
                        {/* Your frontend development details here */}
                    </article>
                </div>

                {/* Backend Section */}
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <article className='experience__details'>
                        <AiOutlineCheckCircle className='experience__icon' />
                        <h4>Node.JS</h4>
                        <small className='text-light'>Experienced</small>
                        {/* Your backend development details here */}
                    </article>
                    <article className='experience__details'>
                        <AiOutlineCheckCircle className='experience__icon' />
                        <h4>MongoDB</h4>
                        <small className='text-light'>Experienced</small>
                        {/* Your backend development details here */}
                    </article>
                    <article className='experience__details'>
                        <AiOutlineCheckCircle className='experience__icon' />
                        <h4>MySQL</h4>
                        <small className='text-light'>Experienced</small>
                        {/* Your backend development details here */}
                    </article>
                    <article className='experience__details'>
                        <AiOutlineCheckCircle className='experience__icon' />
                        <h4>GraphQL</h4>
                        <small className='text-light'>Experienced</small>
                        {/* Your backend development details here */}
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Experience;
