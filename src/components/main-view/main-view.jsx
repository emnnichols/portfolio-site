import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import portrait from "../../../img/portfolio_portrait.jpeg";
import { baseUrl } from "../constants";

import { NavigationBar } from "../navigation-bar/navigation-bar";
import { Footer } from "../footer-bar/footer-bar";
import { AboutView } from "../about-view/about-view";
import { ProjectsView } from "../projects-view/projects-view";
import { DetailsView } from "../details-view/details-view";
import { ContactView } from "../contact-view/contact-view";

export const MainView = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(baseUrl + "/projects", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        const projectsfromApi = data.map((project) => {
          return {
            id: project._id,
            name: project.Name,
            desc: project.Description,
            github: project.Github,
            image: project.Image,
            features: project.Features,
            blurb: project.Blurb,
            live: project.Live
          };
        });

        setProjects(projectsfromApi);
      });
  });

  return (
    <>
      <NavigationBar />
      <Row className="justify-content-md-center">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Col md={10}>
                  <Card className="card">
                    <Card.Body>
                      <Row className="introCard">
                        <Col lg={4} className="col-12"><img src={portrait} width="340px" className="portrait" /></Col>
                        {/* <Card.Title>My name is Emily Nichols.</Card.Title>
                        <br />
                        <Card.Subtitle>
                          I'm a &#160;<span className="standout">&nbsp;&lt; web developer /&gt;&nbsp;</span>&#160; located in Las Vegas, Nevada.
                        </Card.Subtitle> */}
                        <Col lg={8} className="col-12">
                          <Card.Text className="introText">
                            {`<!DOCTYPE introduction>`}<br />
                            &#160;&#160;
                            {`<Name`}<br />
                            &#160;&#160;&#160;&#160;first="<span className="standout">Emily</span>"<br />
                            &#160;&#160;&#160;&#160;last="<span className="standout">Nichols</span>"&gt;&nbsp;<br />
                            &#160;&#160;{`</Name>`}
                            <br />
                            &#160;&#160;{`<intro>`}<br />
                            <span className="homeIntro standout">I'm a web developer located in Las Vegas, Nevada.<br />
                              I have an Associate's in Digital Forensics and am currently going through the Career Foundry Full-Stack Development bootcamp.</span><br />
                            &#160;&#160;{`</intro>`}<br />
                          </Card.Text></Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Col md={10}>
                  <AboutView />
                </Col>
              </>
            }
          />
          <Route
            path="/projects"
            element={
              projects.map((project) => {
                return (
                  <Col className="mb-4" key={`${project.id}_project_list`} lg={4} md={6} sm={12}>
                    <ProjectsView
                      project={project} />
                  </Col>
                )
              })
            }
          />
          <Route
            path="/projects/:name"
            element={
              <>
                <Col md={10}>
                  <DetailsView
                    projects={projects}
                  />
                </Col>
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Col md={10}>
                  <ContactView />
                </Col>
              </>
            }
          />
        </Routes>
      </Row>
      <Footer />
    </>
  )
}