import { React } from "react";
import PropTypes from "prop-types";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectsView = ({ project }) => {

  return (
    <>
      {!project.featured
        ? <Col className="mb-4" key={`${project.id}_project_list`} lg={4} sm={12}>
          <Card className="h-100 w-100">
            <Card.Body className="cardBody">
              <Card.Title className="cardTitle" style={{ letterSpacing: "1px" }}>{project.name}</Card.Title>
              <Card.Text className="projectBlurb">{project.blurb}</Card.Text>
            </Card.Body>

            <Card.Img variant="top" src={project.image} className="h-100 w-100 projectImage" />

            <Card.Body className="cardBody">
              <Card.Text className="justify-content-md-center">
                <Row className="justify-content-md-center">
                  <Col md={6} sm={12} className="w-100">
                    <Link to={`/projects/${encodeURIComponent(project.name)}`}>
                      <Button variant="primary" className="primaryButton mt-2">DETAILS</Button>
                    </Link>
                    <Link to={project.github} target="_blank">
                      <Button variant="primary" className="primaryButton mt-2">GITHUB</Button>
                    </Link>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card></Col>
        : null}
    </>
  );
};

ProjectsView.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    desc: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired
};