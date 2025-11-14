import React from "react";
import "./Hero.css";
import profilePic from "./pic.png"; 



export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <h1 className="hero-title">
                Hi, I'm <span className="highlight">Hiba</span>
        </h1>
        <p className="hero-subtitle">
I'm a passionate web developer who loves creating clean, functional, and creative designs. I enjoy turning ideas into interactive digital experiences using modern web technologies like React, JavaScript, HTML, and CSS.
        </p>

    
<button  className="button" href="#">
  <span className="button__icon-wrapper">
    <svg
      width="10"
      className="button__icon-svg"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 15"
    >
      <path
        fill="currentColor"
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
      ></path>
    </svg>

    <svg
      className="button__icon-svg button__icon-svg--copy"
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      fill="none"
      viewBox="0 0 14 15"
    >
      <path
        fill="currentColor"
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
      ></path>
    </svg>
  </span>
  Explore All
</button>


      </div>

      <div className="hero-right">
        <img src={profilePic} alt="Hiba" className="hero-image" />
      </div>



    </section>
  );
}
