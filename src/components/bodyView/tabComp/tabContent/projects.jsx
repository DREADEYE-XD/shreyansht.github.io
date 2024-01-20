import React from "react";
import "./projects.css";

const Projects = (props) => {

  const linkOpen = "./icons/link-open.png"

  return (
    <div className="img-container">
      <div className="projectImgContainer">
        <img
          className="projectImg"
          src={props.Img}
          alt=""
          height="350"
          width="680"
        />
      </div>

      <div className="hoverTextContainer">
        <a href={props.linkToProject}>
        <h1 className="hoverText">Click to visit the project </h1>
        <img src={linkOpen} alt="" height="18" width="18"/>
        </a>
        
      </div>
    </div>
  );
};

export default Projects;
