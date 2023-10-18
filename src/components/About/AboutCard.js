import React from "react";
import Card from "react-bootstrap/Card";
import { VscDebugBreakpointFunction } from "react-icons/vsc";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Awais Soomro </span>
            from <span className="purple"> Hyderabad, Pakistan.</span>
            <br /> I am a self-taught Web Developer, I mostly do front-end stuff, but I'm currently experimenting Web Machine Learning using TensorFlow.js.
            <br />
            <br />

            I have done 2 month paid internship at a software company as Front-End Web Developer and Marketer.
            <br />
            <br />
            I also have a life apart from coding!👽 
          </p>
          <ul>
            <li className="about-activity">
              <VscDebugBreakpointFunction /> Playing Video Games
            </li>
            <li className="about-activity">
              <VscDebugBreakpointFunction /> Cricket
            </li>
            <li className="about-activity">
              <VscDebugBreakpointFunction /> Snooker
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always desire to learn more!"{" "}
          </p>
          <footer className="blockquote-footer">Awais</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
