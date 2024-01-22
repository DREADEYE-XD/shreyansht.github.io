import React from "react";
import "./bodyView.css";
import NameComp from "./nameComp/nameComp";
import ImgComp from "./imgComp/imgComp";
import TabComp from "./tabComp/tabComp";

//Global definitions to change the name or images easily
const dp = "https://dreadeye-xd.github.io/shreyansht.github.io/images/dp.jpg";
const fullName = "Shreyansh Tripathy";
const subHeading = "Hi, I'm";
const about =
  "I'm a full stack developer based in Uttar Pradesh, India.";
const linkedInLogo = "./icons/linkedin.png";
const githubLogo = "./icons/github.png";
const linkToLinkedIn = "https://www.linkedin.com/in/shreyansh-tripathy-9ba6ba225/";
const linkToGit = "https://github.com/DREADEYE-XD/WebDevCourse.git"; 

const reactImg = "./icons/react.png";
const apiImg = "./icons/api.png";
const cssImg = "./icons/css.png";
const htmlImg = "./icons/html-5.png";
const nodeImg = "./icons/nodejs.png";
const sqlImg = "./icons/sql-server.png";
const expressImg = "./icons/expressjs.png";
const pythonImg = "./icons/python.png";
const gptImg = "./icons/gpt.png";
const mongoImg = "./icons/mongodb.png";
const npmImg = "./icons/npm.png";
const gitImg = "./icons/git.png";

const BodyView = () => {
  return (
    <body className="body-container">
      <div className="topRow">
        <ImgComp dp={dp} />
        <NameComp
          name={fullName}
          subHeading={subHeading}
          about={about}
          linkedInLogo={linkedInLogo}
          githubLogo={githubLogo}
          linkToLinkedIn={linkToLinkedIn}
          linkToGit={linkToGit}
        />
      </div>
      <TabComp
      reactImg={reactImg}
      apiImg={apiImg}
      cssImg={cssImg}
      htmlImg={htmlImg}
      nodeImg={nodeImg}
      sqlImg={sqlImg}
      expressImg={expressImg}
      pythonImg={pythonImg}
      gptImg={gptImg}
      mongoImg={mongoImg}
      npmImg={npmImg}
      gitImg={gitImg}
      />
    </body>
  );
};

export default BodyView;
