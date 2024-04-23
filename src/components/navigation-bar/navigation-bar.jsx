import { Row, Col, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./navigation-bar.scss";

export const NavigationBar = () => {

  return (
    <>
      <Row className="navLinks">
        <Col lg={6} className="col-12"><Navbar className="navBrand justify-content-md-center" expand="sm">
          <Row>
            <Navbar.Brand as={Link} to="/">
              <span className="navTitle navBar"> &nbsp;&lt; &#160; emily nichols &#160; / &gt;&nbsp; </span>
            </Navbar.Brand></Row>
        </Navbar></Col>

        <Col lg={6} className="col-12"><Navbar className="navLinks justify-content-md-center" expand="sm">
          <Row>
            <Nav className="h3">
              <Col className="col-2 navItem">
                <Nav.Link as={Link} to="/">
                  <span className="homeLink">Home</span>
                </Nav.Link>
              </Col>

              <Col className="col-3 navItem">
                <Nav.Link as={Link} to="/about"><span className="aboutLink">About</span>
                </Nav.Link>
              </Col>

              <Col className="col-3 navItem">
                <Nav.Link as={Link} to="/projects">
                  <span className="projectLink">Projects</span>
                </Nav.Link>
              </Col>

              <Col className="col-3 navItem" style={{ paddingLeft: "20px" }}>
                <Nav.Link as={Link} to="/contact">
                  <span className="contactLink">Contact</span>
                </Nav.Link>
              </Col>
            </Nav></Row>
        </Navbar ></Col>
      </Row>

    </>
  )
};