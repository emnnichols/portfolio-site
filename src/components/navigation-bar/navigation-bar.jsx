import { Row, Col, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./navigation-bar.scss";
import logo from "../../../img/navlogo.png";

export const NavigationBar = () => {

  return (
    <Container className="navBar">
      <Col className="col-12">
        <Navbar className="justify-content-center mobileNav">

          <Navbar.Brand as={Link} to="/" style={{ marginLeft: 50 }}>
            <span className="navTitle navBar">
              Emily Nichols
            </span></Navbar.Brand>
        </Navbar>
        <Navbar className="justify-content-center desktopNav">
          <div style={{
            backgroundColor: "#a69eb0",
            marginTop: 15,
            marginRight: 15,
            marginLeft: 20,
            width: '50%',
            height: 1.5
          }} />
          <Navbar.Brand as={Link} to="/">
            <span className="navTitle navBar">
              Emily Nichols
            </span>
          </Navbar.Brand>
          <div style={{
            backgroundColor: "#a69eb0",
            marginTop: 15,
            width: '50%',
            height: 1.5
          }} />
        </Navbar>
        <Navbar className="justify-content-center">
          <Nav>
            <Col className="col-4 navItem" style={{ marginRight: "10px" }}>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Col>

            <Col className="col-4  navItem">
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
            </Col>

            <Col className="col-4  navItem" style={{ marginLeft: "10px" }}>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Col>
          </Nav>
        </Navbar >
      </Col>
    </Container>
  )
};