import React from "react";
import "./MobileNav.css";
import logo from "../../../images/logo.png"

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img src={logo} alt="logo" className="logo" />

          <ul>
            <li>
              <a className="menu-item" href="">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" href="">
                Projects
              </a>
            </li>
            <li>
              <a className="menu-item" href="">
                Contact Me
              </a>
            </li>

            <button className="contact-btn" onClick={() => {}}>Download CV</button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
