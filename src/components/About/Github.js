import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">Coding</strong> Calendar
      </h1>
      <GitHubCalendar
        username="Awii21"
        blockSize={15}
        blockMargin={5}
        color="#4bc7cb"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
