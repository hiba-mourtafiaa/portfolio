import React from "react";

import "./About.css";

const About = () => {
  return (
    <section id ="about">
    <div className="back">
      <div className="three">
        <h1>About Me</h1>
      </div>
    
    <section className="about-section">
      <p className="about-text">
        Hi! I’m Hiba Mourtafiaa, a passionate and driven second-year student with a unique combination of expertise in Accounting, Finance, Taxation, and Web Programming.<br/>I thrive on creating seamless digital experiences and delivering excellent customer service, whether it’s designing interactive websites, managing financial projects, or developing user-friendly applications.<br/> My projects — from fully functional e-commerce platforms to dynamic restaurant management systems — showcase my ability to blend technical skills with practical problem-solving.<br/> I enjoy turning ideas into reality, learning new technologies, and contributing effectively in collaborative environments. <br/>Curious about how I can bring creativity, precision, and innovation to your team?<br/> Dive into my CV and discover more!
      </p>
    </section>
<a
  href="/Mourtafiaa Hiba2.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="cv-link"
>
  <button className="buttons" data-text="CV">
    <span className="actual-text">&nbsp;Learn More&nbsp;</span>
    <span aria-hidden="true" className="hover-text">&nbsp;Learn More &nbsp;</span>
  </button>
</a>




    </div>
    </section>
  );
};

export default About;
