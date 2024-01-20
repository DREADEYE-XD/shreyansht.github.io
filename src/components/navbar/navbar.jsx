import React, { useState } from "react";
import "./navbar.css";
import ButtonImg from "./button";

const icons = ["./icons/home.png", "./icons/about.png", "./icons/resume.png"];
const iconsHover = [
  "./icons/home.gif",
  "./icons/about.gif",
  "./icons/resume.gif",
];

const Navbar = () => {
  const [homeUIcon, sethomeUIcon] = useState(icons[0]);
  const [aboutUIcon, setaboutUIcon] = useState(icons[1]);
  const [resumeUIcon, setresumeUIcon] = useState(icons[2]);

  const handleMouseEnterHome = () => {
    sethomeUIcon(iconsHover[0]);
  };

  const handleMouseLeaveHome = () => {
    sethomeUIcon(icons[0]);
  };

  const handleMouseEnteAbout = () => {
   
    setaboutUIcon(iconsHover[1]);
    
  };

  const handleMouseLeaveAbout = () => {

    setaboutUIcon(icons[1]);
  
  };

  const handleMouseEnterResume = () => {
 
    setresumeUIcon(iconsHover[2]);
  };

  const handleMouseLeaveResume = () => {
    
    setresumeUIcon(icons[2]);
  };

  return (
    <nav>
      <div className="container-nav">
        <h4>shrey.dev</h4>
        <ul className="nav-btn">
          <li className="btn">
            <button
              height="25"
              width="30"
              onMouseEnter={handleMouseEnterHome}
              onMouseLeave={handleMouseLeaveHome}
            >
              <ButtonImg image={homeUIcon} />
            </button>
          </li>

          <li className="btn">
            <button
              height="30"
              width="30"
              onMouseEnter={handleMouseEnteAbout}
              onMouseLeave={handleMouseLeaveAbout}
            >
              <ButtonImg image={aboutUIcon} />
            </button>
          </li>
          <li className="btn">
            <button
              height="30"
              width="30"
              onMouseEnter={handleMouseEnterResume}
              onMouseLeave={handleMouseLeaveResume}
            >
              <ButtonImg image={resumeUIcon} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
