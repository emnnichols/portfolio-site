import { Row, Col, Container, Nav, Navbar, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./navigation-bar.scss";
import logo from "../../../img/navlogo.png";

export const NavigationBar = () => {

  return (
    <Container className="card col-12" style={{ padding: "20px" }}>
      <Row className="navBar">
        <Col className="col-12" style={{ padding: "0px" }}>
          <Navbar.Brand as={Link} to="/" className="navTitle">
            <img src={logo} width="400px" />
          </Navbar.Brand>
        </Col>
        <Col className="col-12">
          <Navbar className="card" style={{ padding: "20px 0px 0px 0px" }}>
            <Row>
              <Col className="navItem">
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
              </Col>

              <Col className="navItem" style={{ width: "200px", marginRight: "10px", marginLeft: "10px" }}>
                <Nav.Link as={Link} to="/projects">
                  Projects
                </Nav.Link>
              </Col>

              <Col className="navItem">
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Col></Row>
          </Navbar>
        </Col>
      </Row>
    </Container >
  )
};