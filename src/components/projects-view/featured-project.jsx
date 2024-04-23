import { React } from "react";
import PropTypes from "prop-types";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { ProjectsView } from "./projects-view";

export const FeaturedProject = ({ projects }) => {
  const project = projects.find((project) => { return project.featured });

  return (
    <>
      <Col className="mb-4 featuredProject" key={`${project ? project.id : `featured`}_project_list`} sm={12}>
        {project
          ?
          <Card className="h-100 w-100" style={{ paddingTop: "0px" }}>
            <Card.Body className="cardBody">
              <Col sm={12}>
                <Card.Title className="cardTitle" style={{ letterSpacing: "1px" }}>
                  <div className="currentProject">CURRENT PROJECT</div>
                </Card.Title></Col>
              <Row>
                <Col lg={6} md={12} sm={12}>
                  <Card.Img variant="top" src={project.image} className="featuredProjectImage" />
                </Col>
                <Col lg={6} md={12} sm={12} ><Card.Text className="justify-content-md-center featuredInfo">
                  <Card.Title className="cardTitle featuredTitle" style={{ letterSpacing: "1px" }}>
                    {project.name}
                  </Card.Title>

                  <Card.Text className="projectBlurb">
                    {project.blurb}
                  </Card.Text>
                  <Link to={`/projects/${encodeURIComponent(project.name)}`}>
                    <Button variant="primary" className="primaryButton mt-2">DETAILS</Button>
                  </Link>
                  <Link to={project.github} target="_blank">
                    <Button variant="primary" className="primaryButton mt-2">GITHUB</Button>
                  </Link>
                </Card.Text>
                </Col></Row>
            </Card.Body>
          </Card>
          : null}
      </Col >

      {
        projects.map((project) => {
          return <ProjectsView project={project} />
        })
      }
    </>
  );
};

FeaturedProject.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    desc: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired
};