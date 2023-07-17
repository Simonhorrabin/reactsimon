import React from "react"
import './contact.css'
import { MdOutlineEmail } from "react-icons/md"
import { BsInstagram } from "react-icons/bs"
import { BsMessenger } from "react-icons/bs"

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Contact</h5>
            <h2>Reach Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail />
                        <h4>Email</h4>
                        <h5>Simonhorrabin@gmail.com</h5>
                        <a href="mailto:Simonhorrabin@gmail.com" target="_blank">Send me a message</a>
                    </article>
                    <article className="contact__option">
                        <BsInstagram />
                        <h4>Instagram</h4>
                        <h5>Simon_horrabin19</h5>
                        <a href="https://www.instagram.com/simon_horrabin19/" target="_blank">Check me out</a>
                    </article>
                    <article className="contact__option">
                        <BsMessenger />
                        <h4>Messenger</h4>
                        <h5>Simon_Horrabin</h5>
                        <a href="https://m.me/simon.horrabin/" target="_blank">Hit me up</a>
                    </article>
                
                </div>
                {/* End of options*/}
                <form action="">
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact