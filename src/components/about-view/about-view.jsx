
import { Row, Col, Button, Card } from "react-bootstrap";

import "./about-view.scss";

export const AboutView = () => {

  return (

    <>
      <Card className="card mt-5 mb-5">
        <Card.Title className="cardTitle">
          about
        </Card.Title>
        <Row className="mb-5">
          <Card.Body>
            <Card.Text className="cardText">
              I am from Henderson, Nevada and have an Associate's degree in Digital Forensics.<br />
              Currently, I am a student in the Full-Stack Web Development program at CareerFoundry <br /> and working as a Home Health Aide.
            </Card.Text>
          </Card.Body>
        </Row>

        <Card.Body>
          <Row className="justify-content-md-center">
            <Col lg={3} className="col-3 mb-4">
              <Row><Card.Text className="tableTitle">skills</Card.Text></Row>
              <Row>
                <Card.Text className="skillText">
                  HTML<br />
                  CSS<br />
                  JS
                </Card.Text>
              </Row>
            </Col>

            <Col lg={5} className="col-5  mb-4" style={{ marginRight: "10px", marginLeft: "10px" }}>
              <Row><Card.Text className="tableTitle">expertise</Card.Text></Row>
              <Row style={{ marginRight: "-18px", marginLeft: "-18px", borderRight: "1px solid black", borderLeft: "1px solid black" }}>
                <Card.Text className="skillText">
                  Beginner<br />
                  Beginner<br />
                  Beginner
                </Card.Text>
              </Row>
            </Col>

            <Col lg={3} className="col-3 mb-4">
              <Row><Card.Text className="tableTitle">years</Card.Text></Row>
              <Row>
                <Card.Text className="skillText">
                  0.4<br />
                  0.4<br />
                  0.4
                </Card.Text>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>

  )
};