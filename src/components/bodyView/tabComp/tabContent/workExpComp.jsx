import React from "react";
import "./workExpComp.css";
import WorkExp from "./workExp";

const WorkExpComp = (props) => {

    const experienceData = [
        ["Ericsson India Global", "Noida, UP - India", "11m", "Software Engineer", "Worked for DU (Dubai) as clients"],
        ["Ericsson India Global", "Noida, UP - India", "7m", "Domain Support Specialist", "Worked for MTN (Nigeria & Uganda) as clients"],
        ["Ericsson India Global", "Noida, UP - India", "6m", "Intern", "Trained in Java for working in client-side environment tools."],
        ["Larsen & Tourbo", "New Delhi - India", "2m", "Trainee", "Learned about new technologies like AI, Cloud Based Environments"]
    ]

    return (
        <div className="workExpComp">
            <WorkExp
                linkToLinkedIn={props.linkToLinkedIn}
                expOrgTitle={experienceData[0][0]}
                expLocation={experienceData[0][1]}
                expTotTime={experienceData[0][2]}
                expDesig={experienceData[0][3]}
                expDescrip={experienceData[0][4]}
                companyLogo={"./images/ericsson.png"}
            />
            
            <hr width="550" />
            
            <WorkExp
                linkToLinkedIn={props.linkToLinkedIn}
                expOrgTitle={experienceData[0][0]}
                expLocation={experienceData[1][1]}
                expTotTime={experienceData[1][2]}
                expDesig={experienceData[1][3]}
                expDescrip={experienceData[1][4]}
                companyLogo={"./images/ericsson.png"}
            />
            
            <hr width="550" />
            
            <WorkExp
                linkToLinkedIn={props.linkToLinkedIn}
                expOrgTitle={experienceData[2][0]}
                expLocation={experienceData[2][1]}
                expTotTime={experienceData[2][2]}
                expDesig={experienceData[2][3]}
                expDescrip={experienceData[2][4]}
                companyLogo={"./images/ericsson.png"}
            />
            
            <hr width="550" />

            <WorkExp
                linkToLinkedIn={props.linkToLinkedIn}
                expOrgTitle={experienceData[3][0]}
                expLocation={experienceData[3][1]}
                expTotTime={experienceData[3][2]}
                expDesig={experienceData[3][3]}
                expDescrip={experienceData[3][4]}
                companyLogo={"./images/lnt.png"}
            />

        </div>
    );
};

export default WorkExpComp;