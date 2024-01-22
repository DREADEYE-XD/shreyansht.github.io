import React from "react";
import "./bodyView.css";
import NameComp from "./nameComp/nameComp";
import ImgComp from "./imgComp/imgComp";
import TabComp from "./tabComp/tabComp";

//Global definitions to change the name or images easily
const path = "https://dreadeye-xd.github.io/shreyansht.github.io";
const dp = `${path}/images/dp.jpg`;
const fullName = "Shreyansh Tripathy";
const subHeading = "Hi, I'm";
const about =
  "I'm a full stack developer based in Uttar Pradesh, India.";
  
const linkedInLogo = `${path}/icons/linkedin.png`;
const githubLogo = `${path}/icons/github.png`;
const linkToLinkedIn = "https://www.linkedin.com/in/shreyansh-tripathy-9ba6ba225/";
const linkToGit = "https://github.com/DREADEYE-XD/WebDevCourse.git"; 

const reactImg = `${path}/icons/react.png`;
const apiImg = `${path}/icons/api.png`;
const cssImg = `${path}/icons/css.png`;
const htmlImg = `${path}/icons/html-5.png`;
const nodeImg = `${path}/icons/nodejs.png`;
const sqlImg = `${path}/icons/sql-server.png`;
const expressImg = `${path}/icons/expressjs.png`;
const pythonImg = `${path}/icons/python.png`;
const gptImg = `${path}/icons/gpt.png`;
const mongoImg = `${path}/icons/mongodb.png`;
const npmImg = `${path}/icons/npm.png`;
const gitImg = `${path}/icons/git.png`;

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
