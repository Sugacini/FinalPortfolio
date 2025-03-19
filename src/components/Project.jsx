import "../style.css";
import SingleSkill from "./SingleSkill";
import Text from "./Text";
import {useRef, useState} from "react"

function Project() {
    return (
        <div className="projectOuter" id="projects">
            <Text className="projectHead" text="Best Projects"/>
            <div className="latestproject">
               <SingleSkill className="project" image="face1.jpg" className1="projectImg" text="Expression Capturing" className2="projectName" className3="insideImg" btnClass="btn" link="https://github.com/Sugacini/Chrome-Extension"></SingleSkill>
                <SingleSkill className="project" image="flight.jpg" className1="projectImg" text="Flight Details" className2="projectName" className3="insideImg" btnClass="btn" link="https://github.com/Sugacini/Flight"></SingleSkill>
                <SingleSkill className="project" image="sumplete1.png" className1="projectImg" text="Sumplete" className2="projectName" className3="insideImg" link="https://sugacinil-3357-8443.zcodeusers.in/sumplete/" btnClass="btn"></SingleSkill>
                <SingleSkill className="project" image="bingo.png" className1="projectImg" text="Bingo" className2="projectName" className3="insideImg" link="https://sugacinil-3357-8443.zcodeusers.in/Bingo/" btnClass="btn"></SingleSkill>
                <SingleSkill className="project" image="logo4.jpg" className1="projectImg" text="UnarvAI" className2="projectName" className3="insideImg" link="https://github.com/Sugacini/MoodBasedApplication" btnClass="btn"></SingleSkill>
            </div>
        </div>
    )
}

export default Project;