import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import smartcamera from "../../Assets/Projects/smartcamera.png";

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
              demoLink="https://tensorflowjs-web-based-smart-camera.vercel.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
