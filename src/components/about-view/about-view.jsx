import { Row, Col, Container, Button } from "react-bootstrap";
import "./about-view.scss";
import { baseUrl } from "../constants";
import moment from "moment";
import { BarChart, Bar, XAxis, YAxis, LabelList } from 'recharts';

import download from "../../../img/download.png";
import { BiBorderRadius } from "react-icons/bi";

export const AboutView = () => {

  const downloadResume = () => {
    fetch(baseUrl + "/resume").then((response) => {
      response.blob().then((blob) => {

        // Creating new object of PDF file
        const fileURL =
          window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.target = "_blank";
        alink.click();
        alink.ontouchstart;
      });
    });
  }

  function duration(start) {
    const end = new Date();
    return Math.round((moment(end).diff(start, 'months') / 12) * 10) / 10;
  }

  const coreSkills = duration(new Date(2023, 10 - 1, 16));
  const reactNative = duration(new Date(2024, 5 - 1, 1));
  const angular = duration(new Date(2024, 5 - 1, 20));

  const data = [
    {
      name: "HTML",
      length: ` ${coreSkills < 1 ? `${coreSkills * 10} mos` : `${coreSkills} yrs`}`,
      duration: (coreSkills * 10),
      fill: '#b5bfb0'
    },
    {
      name: "CSS + Sass",
      length: ` ${coreSkills < 1 ? `${coreSkills * 10} mos` : `${coreSkills} yrs`}`,
      duration: (coreSkills * 10),
      fill: '#dec2cb'
    },
    {
      name: "JS + React",
      length: ` ${coreSkills < 1 ? `${coreSkills * 10} mos` : `${coreSkills} yrs`}`,
      duration: (coreSkills * 10),
      fill: '#a69eb0'
    },
    {
      name: "React Native",
      length: `${reactNative < 1 ? `${reactNative * 10} mos` : `${reactNative} yrs`}`,
      duration: (reactNative * 10),
      fill: '#abb1cf'
    },
    {
      name: "Angular",
      length: `${angular < 1 ? `${angular * 10} mos` : `${angular} yrs`}`,
      duration: (angular * 10),
      fill: '#e35d6a'
    },
  ];

  return (
    <Container className="about">
      <Row className="justify-content-center">
        <Col lg={7} className="col-12 aboutText">
          My name is Emily and I'm from Henderson, Nevada!
          I'm a Las Vegas native but I moved all over the US throughout my childhood before coming back to my home state in 2011.
          I attended College of Southern Nevada and have an Associate's degree in General Studies and also a degree in Digital Forensics.
          <br /><br />Currently, I am a student in the Full-Stack Web Development program at CareerFoundry while working as a Home Health Aide.
        </Col>
        <Row className="justify-content-center mt-4">
          <Col xl={6} lg={8} className="col-12">
            <Button
              onClick={downloadResume} className="primaryButton mt-2">
              <Row>
                <Col className="col-12">
                  <img src={download} className="downloadIcon" width="30px" aria-label="Download" alt="Download icon created by Freepik" />
                  resume
                </Col>
              </Row>
            </Button></Col>
        </Row>
        <Row className="skillBarChart mt-4 justify-content-center">
          <BarChart
            className="horizontalChart"
            layout="vertical"
            width={900}
            height={200}
            margin={{ top: 10, bottom: 50, left: 110, right: 70 }}
            data={data}>
            <XAxis type="number" label={{ value: "experience (months)", position: 'insideBottom' }} hide />
            <YAxis dataKey="name" type="category" hide />
            <Bar
              barSize={18}
              background={{ fill: "rgba(200, 194, 205, 0.2)" }}
              dataKey="duration"
            >
              <LabelList dataKey="length" fill="#c3c3d1" angle={0} offset={10} width={200} position="right" className="skill" />
              <LabelList dataKey="name" fill="#000" angle={0} offset={5} width={200} position="left" className="skill" />
            </Bar>
          </BarChart>
        </Row>
        <Row className="skillBarChart mt-4 justify-content-center">
          <BarChart
            className="verticalChart"
            layout="horizontal"
            width={400}
            height={400}
            margin={{ top: 10, bottom: 60, left: 0, right: 0 }}
            data={data}>
            <YAxis type="number" label={{ value: "experience (months)", position: 'insideBottom' }} hide />
            <XAxis type="category" hide />
            <Bar
              barSize={18}
              background={{ fill: "rgba(200, 194, 205, 0.2)" }}
              dataKey="duration"
            >
              <LabelList dataKey="length" fill="#c3c3d1" angle={0} offset={5} width={50} position="bottom" className="skill" />
              <LabelList dataKey="name" fill="#000" angle={0} offset={30} width={50} position="bottom" className="skill" />
            </Bar>
          </BarChart>
        </Row>
      </Row >
    </Container >
  )
};