import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import eye from "./images/eye.jpg";
import jwt from "./images/jwt.png";
import extension from "./images/extension.png";

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.img} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
         View Project
        </Button>
      </Card.Body>
    </Card>
  );
}


function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">Some of my <span style={{color:'#00917C'}}>Projects</span></h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", paddingTop:"30px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              img={eye}
              title="Eye Tracking"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              link="https://github.com/utkarsh596/Eye-Tracking"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              img={jwt}
              title="JWT Authentication"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              link="https://github.com/utkarsh596/JWT"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              img={extension}
              title="Codechef Extension"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              link="https://github.com/utkarsh596/extension"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
