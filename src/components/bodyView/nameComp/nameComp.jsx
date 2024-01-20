import React from "react";
import "./nameComp.css";
const NameComp = (props) => {
  return (
    <div className="name-cont">
      <h2 className="name">{props.subHeading}</h2>
      <h1 className="Title">{props.name}</h1>
      <p className="about">{props.about}</p>
      <div className="btns">
        <a href={props.linkToLinkedIn}>
          <img src={props.linkedInLogo} alt="" height="20" width="20" />
        </a>

        <a href={props.linkToGit}>
          <img src={props.githubLogo} alt="" height="20" width="20" />
        </a>
      </div>
    </div>
  );
};

export default NameComp;
