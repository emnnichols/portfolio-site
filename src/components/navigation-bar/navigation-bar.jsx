import { Row, Col, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./navigation-bar.scss";

export const NavigationBar = () => {

  return (
    <>
      <Navbar className="navBar" expand="lg">
        <Container className="navRow">
          <Col lg={4} md={12} className="col-12 navBrand"><Navbar.Brand as={Link} to="/">
            <span className="navTitle"> &nbsp;&lt; &#160; emily nichols &#160; / &gt;&nbsp; </span>
          </Navbar.Brand></Col>

          <Nav className="h3 justify-content-md-center"><ul>
            <Row className="navList">
              <Col lg={2} className="col-2 navItem">
                <li>
                  <Nav.Link as={Link} to="/">
                    <span className="navLink">Home</span>
                  </Nav.Link>
                </li>
              </Col>

              <Col lg={2} className="col-2 navMiddle">
                <li>
                  <Nav.Link as={Link} to="/about">
                    <span className="navLink">About</span>
                  </Nav.Link>
                </li>
              </Col>

              <Col lg={2} className="col-2 navItem">
                <li>
                  <Nav.Link as={Link} to="/projects">
                    <span className="navLink">Projects</span>
                  </Nav.Link>
                </li>
              </Col>

              <Col lg={2} className="col-2" style={{ paddingLeft: "42px" }}>
                <li>
                  <Nav.Link as={Link} to="/contact">
                    <span className="navLink">Contact</span>
                  </Nav.Link>
                </li>
              </Col>
            </Row></ul>
          </Nav>
        </Container >
      </Navbar >
    </>
  )
};