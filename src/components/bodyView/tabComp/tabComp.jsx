import React, { useState, useEffect } from "react";
import "./tabComp.css";
import ProjectComp from "./tabContent/projectComp";
import SkillsComp from "./tabContent/skillsComp";
import WorkExpComp from "./tabContent/workExpComp";

const TabComp = (props) => {
  const [activeTab, setActiveTab] = useState("Projects");
  const [tabHeight, setTabHeight] = useState("auto");

  const handleBtnClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    // Adjust the height based on the activeTab
    switch (activeTab) {
      case "Projects":
        setTabHeight("1600px"); 
        break;
      case "Skills":
        setTabHeight("800px"); 
        break;
      case "Work Experience":
        setTabHeight("800px"); 
        break;
      // Add cases for other tabs if needed
      default:
        setTabHeight("auto");
    }
  }, [activeTab]);

  return (
    <div className="tab-container" style={{ height: tabHeight }}>
      <div className="tab-wrapper">
        <div className="tab-btn-box">
          <button
            className={activeTab === "Projects" ? "tab-btn active" : "tab-btn"}
            onClick={() => handleBtnClick("Projects")}
          >
            Projects
          </button>
          <button
            className={activeTab === "Skills" ? "tab-btn active" : "tab-btn"}
            onClick={() => handleBtnClick("Skills")}
          >
            Skills
          </button>
          <button
            className={
              activeTab === "Work Experience" ? "tab-btn active" : "tab-btn"
            }
            onClick={() => handleBtnClick("Work Experience")}
          >
            Work Experience
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "Projects" && (
            <div className="tabProject">
              <ProjectComp />
            </div>
          )}
          {activeTab === "Skills" && (
            <div className="tabSkills">
              <SkillsComp
                reactImg={props.reactImg}
                apiImg={props.apiImg}
                cssImg={props.cssImg}
                htmlImg={props.htmlImg}
                nodeImg={props.nodeImg}
                sqlImg={props.sqlImg}
                expressImg={props.expressImg}
                pythonImg={props.pythonImg}
                gptImg={props.gptImg}
                mongoImg={props.mongoImg}
                npmImg={props.npmImg}
                gitImg={props.gitImg}
              />
            </div>
          )}
          {activeTab === "Work Experience" && (
            <div className="tabWorkExp">
              <WorkExpComp />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabComp;
