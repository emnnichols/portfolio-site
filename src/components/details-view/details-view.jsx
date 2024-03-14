import { Button, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

import "./details-view.scss";

export const DetailsView = ({ projects }) => {
  const { name } = useParams();
  let project = projects.find((project) => project.name === name);

  const navigate = useNavigate();

  return (
    !project
      ? navigate(`/projects`)
      :
      <>
        <Row className="mt-3 mb-3">
          <span className="h1 cardTitle">{project.name}</span>
        </Row>

        <Row className="justify-content-md-center">
          <Col className="col-12s">
            <img src={project.image} width="100%" style={{ borderRadius: "10px" }} />
          </Col>
        </Row>

        <Col className="projectInfo mt-5 justify-content-md-center">
          <Row className="desc">
            <Col lg={2} className="col-3">
              <span className="detailTitle">Description&#160;&#160;|&#160; </span>
            </Col>
            <Col lg={7} className="col-12">
              {project.desc}
            </Col>
          </Row>
          <Row className="featureList">
            <Col lg={2} className="col-3">
              <span className="detailTitle">Features&#160;&#160;|&#160; </span>
            </Col>
            <Col lg={7} className="col-12">
              {project.features ? project.features.map((feature) => { return <li>{feature}</li> }) : "No features yet"}
            </Col>
          </Row>
        </Col>

        <Row>
          {project.live ?
            <Button href={project.live} target="_blank" variant="primary" className="w-100 primaryButton mt-5">CHECK IT OUT</Button>
            :
            <div className="w-100 disabledButton mt-5">No live website available</div>}

          <Button href={project.github} target="_blank" variant="primary" className="w-100 primaryButton mt-1">GITHUB</Button>
          <Button className="w-100 primaryButton mt-1" variant="primary" onClick={() => navigate(-1)}>Back</Button></Row>
      </>
  )
};