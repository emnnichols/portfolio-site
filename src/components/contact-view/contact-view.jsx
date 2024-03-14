import { Row, Col, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./contact-view.scss";

import telephone from "../../../img/telephone_icon.svg";
import email from "../../../img/email_icon.svg";

export const ContactView = () => {
  return (
    <>
      <Card>
        <Row className="justify-content-md-center">
          <Card.Title className="cardTitle">Contact me</Card.Title>
          <Row>
            <Col>
              <Button href="tel:+17578488210" className="primaryButton mt-2">
                <img src={telephone} alt="Telephone icon" class="phone_icon" />
                &nbsp;&nbsp;CALL
              </Button>
            </Col>
            <Col>
              <Button href="mailto:emnnichols@outlook.com" className="primaryButton mt-2">
                <img src={email} alt="Email icon" class="email_icon" />
                &nbsp;&nbsp;email
              </Button>
            </Col>
          </Row>
        </Row>
      </Card>
    </>
  )
};