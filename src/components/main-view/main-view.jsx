import { useState, useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import portrait from "../../../img/portfolio_portrait.png";
import { baseUrl } from "../constants";

import { NavigationBar } from "../navigation-bar/navigation-bar";
import { Footer } from "../footer-bar/footer-bar";
import { AboutView } from "../about-view/about-view";
import { DetailsView } from "../details-view/details-view";
import { ContactView } from "../contact-view/contact-view";
import { FeaturedProject } from "../projects-view/featured-project";

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
            uses: project.Uses,
            blurb: project.Blurb,
            live: project.Live,
            featured: project.Featured
          };
        });

        setProjects(projectsfromApi);
      });
  });

  return (
    <>
      <NavigationBar />
      <Row className="justify-content-center">
        <Routes>
          <Route
            path="/"
            element={
              <Container>
                <Col md={10} className="introCard card justify-content-center">
                  <Row className="justify-content-center">
                    <img src={portrait} className="portrait" />
                    <Col lg={6} md={12} className="col-12">
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
                      </Card.Text>
                    </Col>
                  </Row>
                </Col>
              </Container>
            }
          />
          < Route
            path="/about"
            element={
              <>
                <Col md={10}>
                  <AboutView />
                </Col>
              </>
            }
          />
          < Route
            path="/projects"
            element={
              <>
                <FeaturedProject projects={projects} />
              </>
            }
          />
          < Route
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
          < Route
            path="/contact"
            element={
              <>
                <Col md={10}>
                  <ContactView />
                </Col>
              </>
            }
          />
        </Routes >
      </Row >
      <Footer />
    </>
  )
}