import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import smartcamera from "../../Assets/Projects/smartcamera.png";
import tictactoe from "../../Assets/Projects/tictactoe.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Some of the projects I've worked on recently.
        </p>
        <p style={{ color: "white" }}>
          More will be added soon.!!
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartcamera}
              isBlog={false}
              title="Web Based Smart Camera TensorFlow.js"
              description="A web application that describes what's being displayed in an image using the TensorFlow JS library and Coco-SSD Model."
              ghLink="https://github.com/Awii21/tensorflowjs-web-based-smart-camera"
              demoLink="https://awais-tensorflowjs.vercel.app/"
            />
          </Col>




          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe React.js"
              description="Tic-Tac-Toe game, a classic game for two players where each player takes turns marking a grid of 3x3 squares with their X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game. The game is implemented using React and CSS"
              ghLink="https://github.com/Awii21/tic-tac-toe"
              demoLink="https://awais-tic-tac-toe.vercel.app/"
            />
          </Col>

        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
