import React from "react";
import "./skillsComp.css";

const SkillsComp = (props) => {
  return (
    <div className="skills-container">
      <h3 className="header1">Tech Stack</h3>

      <img src={props.reactImg} alt="" height="45" width="45" />
      <img src={props.nodeImg} alt="" height="45" width="45" />
      <img src={props.expressImg} alt="" height="45" width="45" />
      <img src={props.npmImg} alt="" height="45" width="45" />
      <img src={props.htmlImg} alt="" height="45" width="45" />
      <img src={props.cssImg} alt="" height="45" width="45" />
      <img src={props.apiImg} alt="" height="45" width="45" />
      <img src={props.pythonImg} alt="" height="45" width="45" />
      <img src={props.gptImg} alt="" height="35" width="35" />
      <img src={props.sqlImg} alt="" height="45" width="45" />
      <img src={props.mongoImg} alt="" height="45" width="45" />
      <img src={props.gitImg} alt="" height="45" width="45" />
    </div>
  );
};

export default SkillsComp;
