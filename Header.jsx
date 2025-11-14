import React from "react";
import "./Header.css";
import logo from "./logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#project">Work</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
