import { Row, Col, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import github from "../../../img/github.svg";
import linkedIn from "../../../img/linkedin.svg";
import twitter from "../../../img/twitter.svg";

export const Footer = () => {

  return (
    <>
    <Row className="footer mt-5 w-100 justify-content-md-center">
    <Col className="col-12" style={{marginLeft:"2%"}}>Find me at the following</Col>

      <Navbar className="footer" style={{marginLeft:"3%"}}>
        <Container>
          <Row className="w-100 justify-content-md-center"><Col lg={2} className="col-12">
          <Nav>
                <Col className="col-4">
                  <Nav.Link as={Link} to="https://github.com/emnnichols" target="_blank">
                    <img src={github} alt="Github" />
                  </Nav.Link>
                </Col>
                
                <Col className="col-4">
                  <Nav.Link as={Link} to="https://twitter.com/emnnichols" target="_blank">
                    <img src={twitter} alt="Twxitter" />
                  </Nav.Link>
                </Col>

                <Col className="col-4">
                  <Nav.Link as={Link} to="https://www.linkedin.com/in/emily-nichols-724931296/" target="_blank">
                    <img src={linkedIn} alt="LinkedIn" />
                  </Nav.Link>
                </Col>
          </Nav></Col></Row>
        </Container>
      </Navbar>
    </Row>
    </>
  )
};