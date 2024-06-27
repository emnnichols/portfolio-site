import { Row, Col, Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import github from "../../../img/github.png";
import linkedIn from "../../../img/linkedin.png";
import twitter from "../../../img/twitter.png";

export const Footer = () => {

  return (
    <>
      <Container className="footer">
        <Row className="card" style={{ padding: "0px" }}>
          <Col className="col-12">
            <Navbar className="justify-content-center">
              <Row>
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
                </Nav></Row>
            </Navbar >
          </Col>
          <Col className="col-12"><Navbar className="iconAttribute justify-content-center">
            <a href="https://www.flaticon.com/free-icons/linkedin" target="_blank" title="linkedin icons">Linkedin</a>
            <span style={{ paddingRight: "5px" }}>,</span>
            <a href="https://www.flaticon.com/free-icons/github" target="_blank" title="github icons">Github</a>
            <span style={{ paddingRight: "5px" }}>,</span>
            <a href="https://www.flaticon.com/free-icons/tweet" target="_blank" title="tweet icons" style={{ paddingRight: "5px" }}>X / Twitter</a> icons created by Freepik

          </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  )
};