import React from "react"
import './nav.css'
import { AiOutlineHome } from "react-icons/ai"
import {RiContactsBook2Fill} from "react-icons/ri"
import {FaHome} from "react-icons/fa"
import {MdCatchingPokemon} from "react-icons/md"
import {MdComputer} from "react-icons/md"

const Nav = () => {
    return (
        <nav>
            <a href="#home"><FaHome/></a>
            <a href="#about"><MdCatchingPokemon/></a>
            <a href="#contact"><RiContactsBook2Fill/></a>
            <a href="#services"><MdComputer/></a>
        </nav>
    )
}

export default Nav 