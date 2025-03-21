import "../style.css";
import SingleSkill from "./SingleSkill";
import { useEffect, useRef, useState } from "react";

function SingleOtherProjects({ text, isVisible }) {
    console.log(isVisible)
    const other = useRef();
    const Scratch = [{ name: "Jumbled Words", name1: "Balloon Pop", name2: "Catching the Fish", name3: "Emojies", image: "balloonPop.jpg", image1: "" }]


    return (
        (isVisible == true ?
            <div className="otherProjectInner">
                {(text == "Scratch" ? <>
                    {console.log("isvisible" + isVisible)}
                    <SingleSkill className="project1 project" image="jumbled.jpg" className1="projectImg1" text={Scratch[0].name} className2="projectName1" className3="insideImg" link="https://scratch.mit.edu/projects/1044819398/fullscreen/" btnClass="btn1"></SingleSkill>
                    <SingleSkill className="project1 project" image="balloonPop.jpg" className1="projectImg1" text={Scratch[0].name1} className2="projectName1" className3="insideImg" link="https://scratch.mit.edu/projects/1040052213/fullscreen/" btnClass="btn1"></SingleSkill>
                    <SingleSkill className="project1 project" image="fish.jpg" className1="projectImg1" text={Scratch[0].name2} className2="projectName1" className3="insideImg" link="https://scratch.mit.edu/projects/1034193201/fullscreen/" btnClass="btn1"></SingleSkill>
                    <SingleSkill className="project1 project" image="emojies.jpg" className1="projectImg1" text={Scratch[0].name3} className2="projectName1" className3="insideImg" link="https://scratch.mit.edu/projects/1036376695/fullscreen/" btnClass="btn1"></SingleSkill>
                </> : text == "Html/Css" ? <>
                    <SingleSkill className="project1 project" image="vortex.png" className1="projectImg1" text="Vortex" className2="projectName1" className3="insideImg" link="https://sugacinil-3357-8443.zcodeusers.in/assignment_015/vertex.html" btnClass="btn1"></SingleSkill>
                    <SingleSkill className="project1 project" image="cube2.jpg" className1="projectImg1" text="Cube" className2="projectName1" className3="insideImg" link="https://sugacinil-3357-8443.zcodeusers.in/assignment_022/cube.html" btnClass="btn1"></SingleSkill>
                    <SingleSkill className="project1 project" image="lorem.png" className1="projectImg1" text="Lorem" className2="projectName1" className3="insideImg" link="https://sugacinil-3357-8443.zcodeusers.in/assignment_025/" btnClass="btn1"></SingleSkill>
                    <SingleSkill className="project1 project" image="infodazz.png" className1="projectImg1" text="Infodazz" className2="projectName1" className3="insideImg" link="https://sugacinil-3357-8443.zcodeusers.in/finalproject/" btnClass="btn1"></SingleSkill>
                </> : text == "JavaScript" ? <>
                    <SingleSkill className="project1 project" image="typing.jpg" className1="projectImg1" text="Typing Game" className2="projectName1" className3="insideImg" link="https://sugacinil-3357-8443.zcodeusers.in/JSassignment_025/" btnClass="btn1"></SingleSkill>
                    <SingleSkill className="project1 project" image="rock`.jpg" className1="projectImg1" text="Rock Paper Scissors" className2="projectName1" className3="insideImg" link="https://sugacinil-3357-8443.zcodeusers.in/JSassignment_023/" btnClass="btn1"></SingleSkill>
                    <SingleSkill className="project1 project" image="calc.jpg" className1="projectImg1" text="Calculator" className2="projectName1" className3="insideImg" link="https://sugacinil-3357-8443.zcodeusers.in/JSassignment_021/" btnClass="btn1"></SingleSkill>
                    <SingleSkill className="project1 project" image="timer.jpg" className1="projectImg1" text="Timer" className2="projectName1" className3="insideImg" link="https://sugacinil-3357-8443.zcodeusers.in/JSassignment_026/" btnClass="btn1"></SingleSkill>
                </> : text == "Java" ? <>
                    <SingleSkill className="project1 project" image="logo4.jpg" className1="projectImg1" text="My Project" className2="projectName1" className3="insideImg" btnClass="btn1"></SingleSkill>
                    <SingleSkill className="project1 project" image="logo4.jpg" className1="projectImg1" text="My Project" className2="projectName1" className3="insideImg" btnClass="btn1"></SingleSkill>
                    <SingleSkill className="project1 project" image="sumplete.png" className1="projectImg1" text="Sumplete/Bingo" className2="projectName1" className3="insideImg" link="https://sugacinil-3357-8443.zcodeusers.in/sumplete/" btnClass="btn1"></SingleSkill>
                    <SingleSkill className="project1 project" image="logo4.jpg" className1="projectImg1" text="UnarvAI" className2="projectName1" className3="insideImg" link="http://localhost:5176/" btnClass="btn1"></SingleSkill>
                </> : text == "Node" ? <>
                    <SingleSkill className="project1 project" image="chat.jpg" className1="projectImg1" text="Chat" className2="projectName1" className3="insideImg" link="https://chat-application-1-ew8x.onrender.com" btnClass="btn1"></SingleSkill>
                    <SingleSkill className="project1 project" image="comment.jpeg" className1="projectImg1" text="Interactive Commands" className2="projectName1" className3="insideImg" link="https://github.com/Sugacini/Commands" btnClass="btn1"></SingleSkill>
                    <SingleSkill className="project1 project" image="planets.png" className1="projectImg1" text="Planets" className2="projectName1" className3="insideImg" link="https://planets-1-qavj.onrender.com" btnClass="btn1"></SingleSkill>
                    <SingleSkill className="project1 project" image="rock`.jpg" className1="projectImg1" text="Rock Paper Scissors" className2="projectName1" className3="insideImg" link="https://rock-paper-scissors-k35r.onrender.com" btnClass="btn1"></SingleSkill>
                </> : text == "React" ? <>
                    <SingleSkill className="project1 project" image="logo4.jpg" className1="projectImg1" text="My Project" className2="projectName1" className3="insideImg" btnClass="btn1"></SingleSkill>
                    <SingleSkill className="project1 project" image="logo4.jpg" className1="projectImg1" text="My Project" className2="projectName1" className3="insideImg" btnClass="btn1"></SingleSkill>
                    <SingleSkill className="project1 project" image="sumplete.png" className1="projectImg1" text="Sumplete/Bingo" className2="projectName1" className3="insideImg" link="http://localhost:4000/planet?planetName=Mercury" btnClass="btn1"></SingleSkill>
                    <SingleSkill className="project1 project" image="logo4.jpg" className1="projectImg1" text="UnarvAI" className2="projectName1" className3="insideImg" link="https://github.com/Sugacini/New-Emotion-Project" btnClass="btn1"></SingleSkill>
                </> :
                    <div className="otherProjectInner" ref={other}>
                        <SingleSkill className="project1 project" image="jumbled.jpg" className1="projectImg1" text={Scratch[0].name} className2="projectName1" className3="insideImg" link="https://scratch.mit.edu/projects/1044819398/fullscreen/" btnClass="btn1"></SingleSkill>
                    <SingleSkill className="project1 project" image="balloonPop.jpg" className1="projectImg1" text={Scratch[0].name1} className2="projectName1" className3="insideImg" link="https://scratch.mit.edu/projects/1040052213/fullscreen/" btnClass="btn1"></SingleSkill>
                    <SingleSkill className="project1 project" image="fish.jpg" className1="projectImg1" text={Scratch[0].name2} className2="projectName1" className3="insideImg" link="https://scratch.mit.edu/projects/1034193201/fullscreen/" btnClass="btn1"></SingleSkill>
                    <SingleSkill className="project1 project" image="emojies.jpg" className1="projectImg1" text={Scratch[0].name3} className2="projectName1" className3="insideImg" link="https://scratch.mit.edu/projects/1036376695/fullscreen/" btnClass="btn1"></SingleSkill>
                    </div>)}

            </div> : null)

    )
}

export default SingleOtherProjects;