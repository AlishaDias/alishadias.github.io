import React from 'react';
import "./introduction.css";
import headshot from "../../assets/Headshot.png";
import {Link} from "react-scroll";
import hireMe from "../../assets/suitcase.png";

const Introduction = () => {
    return (
      <section id="intro" className="intro-container">
        <img src={headshot} alt="" className="bg" />
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">I'm <span className="introName">Alisha Dias </span> <br />Software Developer</span>
          <p className="introPara">I'm a versatile software developer with a strong academic background in computer science and a passion for creating innovative solutions. Currently pursuing a Master’s in Computer Science at DePaul University, I bring hands-on experience in full-stack development, with expertise in React, Angular, Swift and RESTful WebServices. </p>
          <Link className="link"><button className="btn"><img src={hireMe} alt="" className="image" />Hire Me</button></Link>
        </div>
      </section>
    )
  }

export default Introduction