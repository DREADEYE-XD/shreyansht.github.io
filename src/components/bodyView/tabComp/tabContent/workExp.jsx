import React from "react";

const WorkExp = (props) => {
  return (
    <div className="expWrapper">
      <h3 className="expOrgTitle">{props.expOrgTitle}
        
      </h3>
      <h4 className="expTotalTime">
        {props.expLocation}, {props.expTotTime}
      </h4>

      <h4 className="expDesig">{props.expDesig}</h4>
      <p>{props.expDescrip}</p>
    </div>
  );
};

export default WorkExp;


//<img src={props.companyLogo} alt="" height="35" width="35"/>