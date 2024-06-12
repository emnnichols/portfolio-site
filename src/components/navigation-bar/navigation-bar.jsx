import { Row, Col, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./navigation-bar.scss";

export const NavigationBar = () => {

  return (
    <>
      <Row className="navBar">
        <Col><Navbar className="justify-content-center">
          <Row className="col-12">
            <Navbar.Brand as={Link} to="/">
              <span className="navTitle navBar"> &nbsp;&lt; &#160; emily nichols &#160; / &gt;&nbsp; </span>
            </Navbar.Brand></Row>
        </Navbar></Col>



        <Row lg={12} className="col-12"><Col>
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
        </Row>
      </Row>

    </>
  )
};