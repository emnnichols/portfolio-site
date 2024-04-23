
import { Row, Col, Button, Card } from "react-bootstrap";
import "./about-view.scss";
import moment from "moment";
import portrait from "../../../img/about_portrait.jpeg"

export const AboutView = () => {

  const start = new Date(2023, 10 - 1, 16);
  const end = new Date();
  const duration = Math.round((moment(end).diff(start, 'months') / 12) * 10) / 10;

  return (

    <>
      <Card className="card mt-5 mb-5">
        <Row className="justify-content-md-center">
          <Card.Title className="aboutTitle">
            nice to meet you!
          </Card.Title>

          <Card.Img variant="center" src={portrait} className="aboutPortrait" />
        </Row>
        <Row className="mb-3">
          <Card.Body>
            <Card.Text className="aboutText">
              My name is Emily and I'm from Henderson, Nevada! I'm a Las Vegas native but I moved all over the US throughout my childhood before coming back to my home state in 2011.
              I attended College of Southern Nevada and have an Associate's degree in General Studies and also a degree in Digital Forensics.
              <br /><br />Currently, I am a student in the Full-Stack Web Development program at CareerFoundry <br /> while working as a Home Health Aide.
            </Card.Text>
          </Card.Body>
        </Row>

        <Card.Body>
          <Row className="justify-content-md-center">
            <Col lg={3} className="col-3">
              <Row><Card.Text className="tableTitle">skills</Card.Text></Row>
              <Row>
                <Card.Text className="skillText">
                  HTML<br />
                  CSS<br />
                  JS
                </Card.Text>
              </Row>
            </Col>

            <Col lg={5} className="col-5" style={{ marginRight: "10px", marginLeft: "10px" }}>
              <Row><Card.Text className="tableTitle">expertise</Card.Text></Row>
              <Row>
                <Card.Text className="skillText">
                  Beginner<br />
                  Beginner<br />
                  Beginner
                </Card.Text>
              </Row>
            </Col>

            <Col lg={3} className="col-3">
              <Row><Card.Text className="tableTitle">years</Card.Text></Row>
              <Row>
                <Card.Text className="skillText">
                  {duration}<br />
                  {duration}<br />
                  {duration}
                </Card.Text>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>

  )
};