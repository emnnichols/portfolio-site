import { Row, Col, Container, Card } from "react-bootstrap";
import "./about-view.scss";
import moment from "moment";
import portrait from "../../../img/about_portrait.jpeg"

export const AboutView = () => {

  function duration(start) {
    const end = new Date();
    return Math.round((moment(end).diff(start, 'months') / 12) * 10) / 10;
  }

  const coreSkills = new Date(2023, 10 - 1, 16);
  const angular = new Date(2024, 5 - 1, 20);

  return (
    <Container className="about">
      <Row className="justify-content-center">
        <Col lg={7} className="col-12 aboutText">
          My name is Emily and I'm from Henderson, Nevada!
          I'm a Las Vegas native but I moved all over the US throughout my childhood before coming back to my home state in 2011.
          I attended College of Southern Nevada and have an Associate's degree in General Studies and also a degree in Digital Forensics.
          <br /><br />Currently, I am a student in the Full-Stack Web Development program at CareerFoundry while working as a Home Health Aide.
        </Col>

        <Row className="mt-5 justify-content-center">
          <Container className="horizontalTable">
            <Row className="col-12 mt-5 justify-content-center">
              <Col className="tableTitle col-3 tableLeft" style={{ borderRight: "2px solid #000" }}>
                <Row className="cellBorder"><Col>language</Col></Row>
                <Row className="cellBorder"><Col>expertise lvl</Col></Row>
                <Row><Col>experience</Col></Row>
              </Col>
              <Col className="tableRight col-9 tableText">
                <Row className="cellBorder">
                  <Col lg={2} className="col-2">HTML</Col>
                  <Col lg={3} className="col-2 skillBorder">CSS (+ SCSS)</Col>
                  <Col lg={4} className="col-7 skillBorder">JS (+ REACT, REACT NATIVE)</Col>
                  <Col lg={2} className="col-2 skillBorder">ANGULAR</Col>
                </Row>
                <Row className="cellBorder">
                  <Col lg={2} className="col-2">
                    {duration(coreSkills) < 3
                      ? `junior` : duration(coreSkills) < 7
                        ? `mid`
                        : `senior`}</Col>
                  <Col lg={3} className="col-2 skillBorder">
                    {duration(coreSkills) < 3
                      ? `junior` : duration(coreSkills) < 7
                        ? `mid`
                        : `senior`}
                  </Col>
                  <Col lg={4} className="col-7 skillBorder">
                    {duration(coreSkills) < 3
                      ? `junior` : duration(coreSkills) < 7
                        ? `mid`
                        : `senior`}
                  </Col>
                  <Col lg={2} className="col-2 skillBorder">
                    {duration(angular) < 3
                      ? `junior` : duration(angular) < 7
                        ? `mid`
                        : `senior`}
                  </Col>
                </Row>
                <Row>
                  <Col lg={2} className="col-2">{duration(coreSkills) < 1
                    ? `${duration(coreSkills) * 10} mos`
                    : duration(coreSkills) === 1
                      ? `${duration(coreSkills)} year`
                      : `${duration(coreSkills)} years`}</Col>
                  <Col lg={3} className="col-2 skillBorder">{duration(coreSkills) < 1
                    ? `${duration(coreSkills) * 10} mos`
                    : duration(coreSkills) === 1
                      ? `${duration(coreSkills)} year`
                      : `${duration(coreSkills)} years`}</Col>
                  <Col lg={4} className="col-7 skillBorder">{duration(coreSkills) < 1
                    ? `${duration(coreSkills) * 10} mos`
                    : duration(coreSkills) === 1
                      ? `${duration(coreSkills)} year`
                      : `${duration(coreSkills)} years`}</Col>
                  <Col lg={2} className="col-2 skillBorder">
                    {duration(angular) < 1
                      ? `${duration(angular) * 10} mos`
                      : duration(angular) === 1
                        ? `${duration(angular)} year`
                        : `${duration(angular)} years`}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>

          <Container className="mt-3 verticalTable">
            <Col className="tableText">
              <Row>
                <Col lg={4} className="col-5 tableTitle">language</Col>
                <Col lg={4} className="col-3 tableTitle skillBorder">expertise</Col>
                <Col lg={4} className="col-4 tableTitle skillBorder">experience</Col>
              </Row>
              <Row className="cellBorder">
                <Col lg={4} className="col-5">HTML</Col>
                <Col lg={4} className="col-3 skillBorder">{duration(coreSkills) < 3 ? `junior` : duration(coreSkills) < 7 ? `mid` : `senior`}</Col>
                <Col lg={4} className="col-4 skillBorder">{duration(coreSkills) < 1 ? `${duration(coreSkills) * 10} mos` : duration(coreSkills) === 1 ? `${duration(coreSkills)} year` : `${duration(coreSkills)} years`}</Col>
              </Row>
              <Row className="cellBorder">
                <Col lg={4} className="col-5">CSS (+ SCSS)</Col>
                <Col lg={4} className="col-3 skillBorder">{duration(coreSkills) < 3 ? `junior` : duration(coreSkills) < 7 ? `mid` : `senior`}</Col>
                <Col lg={4} className="col-4 skillBorder">{duration(coreSkills) < 1 ? `${duration(coreSkills) * 10} mos` : duration(coreSkills) === 1 ? `${duration(coreSkills)} year` : `${duration(coreSkills)} years`}</Col>
              </Row>
              <Row className="cellBorder">
                <Col lg={4} className="col-5">JS (REACT/ REACT NATIVE)</Col>
                <Col lg={4} className="col-3 skillBorder">{duration(coreSkills) < 3 ? `junior` : duration(coreSkills) < 7 ? `mid` : `senior`}</Col>
                <Col lg={4} className="col-4 skillBorder">{duration(coreSkills) < 1 ? `${duration(coreSkills) * 10} mos` : duration(coreSkills) === 1 ? `${duration(coreSkills)} year` : `${duration(coreSkills)} years`}</Col>
              </Row>
              <Row>
                <Col lg={4} className="col-5">ANGULAR</Col>
                <Col lg={4} className="col-3 skillBorder">{duration(angular) < 3 ? `junior` : duration(angular) < 7 ? `mid` : `senior`}</Col>
                <Col lg={4} className="col-4 skillBorder">{duration(angular) < 1 ? `${duration(angular) * 10} mos` : duration(angular) === 1 ? `${duration(angular)} year` : `${duration(angular)} years`}</Col>
              </Row>
            </Col></Container>
        </Row>
      </Row >
    </Container >
  )
};