import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'
import { FaBars } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";
import MobileNav from './MobileNav/MobileNav';
import Projects from'../Projects/Projects'

const Navbar = () => {

  const [openMenu , setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />


      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className='logo' src={logo} alt="" width='200px'/>
          <ul>
            <li>
              <a className='menu-item' href="">Home</a>
            </li>
            <li>
              <a className='menu-item' href="">Skills</a>
            </li>
            <li>
              <a className='menu-item' href={Projects}>Projects</a>
            </li>
            <li>
              <a className='menu-item' href="">Contact Me</a>
            </li>

            <button className='contact-btn' onClick={() => {}}>
              Download CV
            </button>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span className={'material-symbols-outlined'} style={{fontSize:'1.8rem'}}>
            {openMenu ? <RiCloseLargeFill /> : <FaBars />}
            </span>
          </button>

        </div>
      </nav>
    </>
  )
}

export default Navbar
