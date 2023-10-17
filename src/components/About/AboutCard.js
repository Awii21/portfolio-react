import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Awais Soomro </span>
            from <span className="purple"> Hyderabad, Pakistan.</span>
            <br /> I am a self-taught Web Developer, currently learning Machine Learning in Web using TensorFlow.js.
            <br />
            I have done 2 month paid internship in a Software Company as Front-End Web Developer and Marketer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Snooker
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "There's no ending point in learning!"{" "}
          </p>
          <footer className="blockquote-footer">Awais</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
