import React from "react"
import './nav.css'
import {RiContactsBook2Fill} from "react-icons/ri"
import {FaHome} from "react-icons/fa"
import {MdCatchingPokemon} from "react-icons/md"
import {MdComputer} from "react-icons/md"
import { useState } from "react"

const Nav = () => {
    const [activeNav, setActiveNav ] = useState ('#')
    return (
        <nav>
            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><FaHome/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><MdCatchingPokemon/></a>
            <a href="#contact" onClick={() => setActiveNav('contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsBook2Fill/></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdComputer/></a>
        </nav>
    )
}

export default Nav 