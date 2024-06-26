import { Button, Row, Col, Container } from "react-bootstrap";
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
      <Col className="projectDetails">
        <Row className="mt-3 mb-3">
          <span className="h1 cardTitle">{project.name}</span>
        </Row>

        <Row className="justify-content-center">
          <Col className="col-12">
            <img src={project.image} width="100%" style={{ borderRadius: "10px" }} />
          </Col>
        </Row>

        <Container className="verticalInfo mt-5 justify-content-center">
          <Col className="projectInfo">
            <Row className="mb-4">
              <Col lg={4} className="col-5"><span className="detailTitle">description</span></Col>
              <Col lg={4} className="col-3"><span className="detailTitle">features</span></Col>
              <Col lg={4} className="col-4"><span className="detailTitle">used</span></Col>
            </Row>
            <Row>
              <Col lg={4} className="col-3 desc">{project.desc}</Col>
              <Col lg={4} className="col-5 desc" style={{ paddingLeft: "3%" }}>{project.features ? project.features.map((feature) => { return <li>{feature}</li> }) : "No features yet"}</Col>
              <Col lg={4} className="col-5 desc" style={{ paddingLeft: "9%" }}>{project.uses ? project.uses.map((used) => { return <li>{used}</li> }) : "Whoops!"}</Col>
            </Row>
          </Col>
        </Container >

        <Container className="horizontalInfo mt-5 justify-content-center">
          <Row className="col-12 mt-5">
            <Col>
              <Row>
                <Col className="col-3"><span className="detailTitle" style={{ marginLeft: "-20px" }}>description</span></Col>
                <Col className="col-9 mb-5">{project.desc}</Col>
              </Row>
              <Row>
                <Col className="col-3"><span className="detailTitle" style={{ marginLeft: "0px" }}>features</span></Col>
                <Col className="col-9 mb-5 desc">{project.features ? project.features.map((feature) => { return <li>{feature}</li> }) : "No features yet"}</Col>
              </Row>
              <Row>
                <Col className="col-3"><span className="detailTitle" style={{ marginLeft: "30px" }}>used</span></Col>
                <Col className="col-9 mb-2">{project.uses ? project.uses.map((used) => { return <li>{used}</li> }) : "Whoops!"}</Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Row className="projectButtons mb-5">
          {project.live ?
            <Button href={project.live} target="_blank" variant="primary" className="primaryButton mt-5">CHECK IT OUT</Button>
            :
            <div className="disabledButton mt-5">No live website available</div>}

          <Button href={project.github} target="_blank" variant="primary" className="primaryButton mt-1">GITHUB</Button>
          <Button className="primaryButton mt-1" variant="primary" onClick={() => navigate(-1)}>Back</Button></Row>
      </Col >
  )
};