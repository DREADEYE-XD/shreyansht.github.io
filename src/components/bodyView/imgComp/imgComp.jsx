import React from "react";
import "./imgComp.css";
const ImgComp = (props) => {
  return (
    <div className="img-cont">
      <img className="dp" src={props.dp} alt="" height="250" width="250" />
    </div>
  );
};

export default ImgComp;
