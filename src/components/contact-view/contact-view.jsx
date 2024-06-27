import { Row, Col, Button, Card, Container, Form, FloatingLabel } from "react-bootstrap";
import { useState } from "react";

import { baseUrl } from "../constants";

export const ContactView = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = { Email: email, Subject: subject, Message: message }

    fetch(baseUrl + "/contact/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.ok) {
        alert("Message sent!");
        setEmail("");
        setMessage("");
        setSubject("")
      } else {
        console.log(response)
      }
    })
  };

  return (
    <Container className="contact">
      <Row className="mb-5 justify-content-center">
        <Row className="justify-content-center">
          <Col xl={6} lg={8} className="col-12">
            <Button href="tel:+17578488210" className="primaryButton mt-2">
              <Row style={{ textAlign: "right", marginLeft: "5px" }}>
                <Col className="contactType col-4">call</Col>
                <Col style={{ textAlign: "left" }} className="col-7 contactInfo">
                  | &nbsp; (757) 848 - 8210</Col></Row>
            </Button></Col>
        </Row>
        <Row className="justify-content-center">
          <Col xl={6} lg={8} className="col-12">
            <Button href="mailto:emnnichols@outlook.com" className="primaryButton mt-2">
              <Row style={{ textAlign: "right", marginLeft: "5px" }}>
                <Col className="contactType col-4">email</Col>
                <Col style={{ textAlign: "left" }} className="col-7 contactInfo">| &nbsp; emnnichols@outlook.com</Col>
              </Row>
            </Button>
          </Col>
        </Row>
      </Row >
      <Row>
        <Card.Title className="mb-3 formTitle">OR ... SEND a MESSAGE</Card.Title>
      </Row>
      <Row className="justify-content-center">
        <Row className="mt-2 justify-content-center">
          <Col xl={6} lg={8} className="col-12">
            <Form onSubmit={handleSubmit} method="POST" >
              <Row>
                <Col className="col-6">
                  <FloatingLabel
                    controlId="floatingInput"
                    className="formLabel"
                    label="* email">
                    <Form.Control
                      className="contactForm"
                      aria-label="Your email address"
                      type="text"
                      placeholder="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} required />
                  </FloatingLabel>
                </Col>
                <Col className="col-6">
                  <FloatingLabel
                    controlId="floatingInput"
                    className="formLabel"
                    label="Subject">
                    <Form.Control

                      className="contactForm"
                      aria-label="Subject Line"
                      placeholder="subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)} />
                  </FloatingLabel>
                </Col>
              </Row>
              <br />
              <FloatingLabel
                controlId="floatingInput"
                className="formLabel"
                label="* Your message here">
                <Form.Control
                  className="contactForm"
                  aria-label="Message to Send"
                  type="text"
                  placeholder="message"
                  style={{ height: "100px" }}
                  as="textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)} />
                <Form.Text className="requiredForm">* = required</Form.Text>
              </FloatingLabel>

              <Button onClick={() => { !email.includes("@") || !email.includes(".com") ? alert("Email isn't valid!") : message.length < 6 ? alert("Message too short!") : handleSubmit }} disabled={!email ? true : !message ? true : false} className="mb-2 mt-2 primaryButton w-100" variant="primary" type="submit">
                {!email ? "Email needed" : !message ? "message is empty!" : "send message"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Row>
    </Container >
  )
};