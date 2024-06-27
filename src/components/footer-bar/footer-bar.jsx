import { Row, Col, Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import github from "../../../img/github.png";
import linkedIn from "../../../img/linkedin.png";
import twitter from "../../../img/twitter.png";

export const Footer = () => {

  return (
    <Container className="footer">
      <Col className="col-12">
        <Navbar className="justify-content-center">
          <Nav>
            <Col className="col-4">
              <Nav.Link as={Link} to="https://github.com/emnnichols" target="_blank" >
                <img src={github} className="footerIcon" width="30px" aria-label="Github" alt="Github icon created by Freepik" />
              </Nav.Link>
            </Col>

            <Col className="col-4">
              <Nav.Link as={Link} to="https://twitter.com/emnnichols" target="_blank">
                <img src={twitter} className="footerIcon" width="30px" aria-label="X formerly Twitter" alt="X icon created by Freepik" />
              </Nav.Link>
            </Col>

            <Col className="col-4">
              <Nav.Link as={Link} to="https://www.linkedin.com/in/emily-nichols-724931296/" target="_blank">
                <img src={linkedIn} className="footerIcon" width="30px" aria-label="LinkedIn" alt="Linkedin icon created by Freepik" />
              </Nav.Link>
            </Col>
          </Nav>
        </Navbar>
        <Col className="col-12 iconAttribute justify-content-center">
          <a href="https://www.flaticon.com/free-icons/linkedin" target="_blank" title="linkedin icons">
            Linkedin</a><span style={{ paddingRight: "5px" }}>,</span>
          <a href="https://www.flaticon.com/free-icons/github" target="_blank" title="github icons">
            Github</a><span style={{ paddingRight: "5px" }}>,</span>
          <a href="https://www.flaticon.com/free-icons/tweet" target="_blank" title="tweet icons">
            TWITTER</a>
          <span style={{ paddingLeft: "10px" }}>icons created by Freepik</span>
        </Col>
      </Col>
    </Container>
  )
};