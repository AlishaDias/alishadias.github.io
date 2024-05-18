import React from 'react';
import './navbar.css';
import { Link } from "react-scroll";
import contactImg from "../../assets/contact-form.png";
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="Logo"></img>
      <div className="desktopMenu">
        <Link to="experience" smooth={true} duration={500} className="desktopMenuListItem">Experience</Link>
        <Link to="project" smooth={true} duration={500} className="desktopMenuListItem">Projects</Link>
        <Link to="skills" smooth={true} duration={500} className="desktopMenuListItem">Skills</Link>
      </div>
      <Link to="contact" smooth={true} duration={500} className="desktopMenuBtn">
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </Link>
    </nav>
  )
}

export default Navbar;
