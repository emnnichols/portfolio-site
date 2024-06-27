import { React, useState } from "react";
import PropTypes from "prop-types";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectsView = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <>
      {!project.featured
        ?
        <Row onMouseEnter={toggleHover} onMouseLeave={toggleHover} onTouchStartCapture={toggleHover} onTouchEndCapture={toggleHover} className="col-12 justify-content-center project">
          <Col lg={hovered ? 6 : 7} className={hovered ? 'col-10 centeredHover mb-5' : 'col-10 mb-5'} key={`${project.id}_project_list`}>
            <Row>
              <Card.Title className="cardTitle">
                {project.name}
              </Card.Title>
              <Card.Text className="mt-3 projectBlurb">{project.blurb}</Card.Text>
            </Row>
            <Row className="mb-2 justify-content-center">
              <Col lg={10} className="col-12 justify-content-center">
                <Row>
                  <Link to={`/projects/${encodeURIComponent(project.name)}`}>
                    <Button variant="primary" className="mt-3 primaryButton">DETAILS</Button>
                  </Link>
                </Row>
                <Link to={project.github} target="_blank">
                  <Button variant="primary" className="mt-2 primaryButton">GITHUB</Button>
                </Link>
              </Col>
            </Row>
          </Col >
          <Col lg={6} className="col-12 imageContainer">
            <Row>
              <Card.Img variant="top" src={project.image} className={hovered ? "projectImage mt-5" : "projectImageHide"} />
            </Row>
          </Col>
        </Row>
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