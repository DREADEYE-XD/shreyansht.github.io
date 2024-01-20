import React from "react";
import Projects from "./projects";

const ProjectComp = () => {
  const projectImg = [
    "./images/p1.jpg",
    "./images/p2.jpg",
    "./images/p3.jpg",
    "./images/p4.jpg",
  ];

  const projectLink = [
    "https://www.google.com/"
  ];

  return (
    <div className="project-container">
      <Projects Img={projectImg[0]} linkToProject={projectLink[0]} />
      <Projects Img={projectImg[1]} linkToProject={projectLink[0]} />
      <Projects Img={projectImg[2]} linkToProject={projectLink[0]} />
      <Projects Img={projectImg[3]} linkToProject={projectLink[0]} />
    </div>
  );
};

export default ProjectComp;
