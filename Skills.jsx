import React from "react";
import "./Skills.css";

const logos = [
  "/images/figma.png",
  "/images/html.png",
  "/images/java.png",
  "/images/js.png",
  "/images/ms-tools.png",
  "/images/mysql.png",
  "/images/photoshop.png",
  "/images/php.png",
  "/images/react.png",
  "/images/css.png",
];


const LogoSlider = () => {
  return (
        <section id ="skills">
    <div>
      <div className="three">
        <h1>My Skills</h1>
      </div>

      <div className="slider">
        <div className="slide-track">
          {logos.concat(logos).map((logo, index) => (
            <div className="logo-box" key={index}>
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default LogoSlider;
