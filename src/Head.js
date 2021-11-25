import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import myImg from "./images/about.jpg";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Head = () =>{
    return(
      <section>
        <Container fluid> 
      <Container  className="head">
          <Row>
              <Col md={7}>
               <div className="head-intro">Welcome Stranger</div>
              </Col>
              <Col>
               <div className="head-name"><span style={{color:'grey'}}>I'm </span>Utkarsh Singhal</div>
               <div style={{ fontSize:'60px',color:'#00917C',padding: 50}}>
                <Type />
              </div>
              </Col>
          </Row>
      </Container>
      <Container fluid className="head-about">
      <Row>
          <Col md={8} className="head-about-description">
            <div style={{ fontSize: "3.6em" }}>
              LET ME <span style={{color:"#00917C"}}> INTRODUCE </span> MYSELF
            </div>
            <div>
            <p className="my-description">Enthusiastic engineering graduate with basic knowledge in coding and design.
            <br/>
            <br/>
            Proficient in C++, HTML5 and JavaScript.
            <br/>
            <br/>
            Ability to learn new softwares and technologies quickly.
            <br/>
            <br/>
            Capability to work in teams by providing valuable support.
            </p>
            </div>
          </Col>
          <Col md={4} className="head-about-description">
            <img src={myImg} className="img-fluid head-image" alt="avatar" />
          </Col>
      </Row>
      
      <Row>
          <Col md={12} className="home-about-social">
            <div style={{fontSize:'60px'}}>FIND <span style={{color:'#00917C'}}>ME</span> ON</div>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/utkarsh596"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/utkarsh-singhal-58ba3b1a6/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/utkarsh3025/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
      </Row>
      </Container>
      </Container>
      </section>
    );
  };


export default Head;