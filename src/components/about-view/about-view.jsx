import { Row, Col, Container } from "react-bootstrap";
import "./about-view.scss";
import moment from "moment";
import { BarChart, Bar, XAxis, YAxis, LabelList } from 'recharts';

export const AboutView = () => {

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
        <Row className="skillBarChart justify-content-center">
          <BarChart
            layout="vertical"
            width={600}
            height={230}
            margin={{ top: 20, bottom: 20, left: 5, right: 5 }}
            data={data}>
            <XAxis type="number" label={{ value: "experience (months)", offset: -15, position: 'insideBottom' }} />
            <YAxis dataKey="name" type="category" width={100} padding={{ bottom: 8 }} />
            <Bar
              barSize={13}
              background={{ fill: "rgba(200, 194, 205, 0.2)" }}
              dataKey="duration"
            >
              <LabelList dataKey="length" fill="#000" angle={0} offset={10} width={100} position="right" className="durationHover" />
            </Bar>
          </BarChart>
        </Row>
      </Row >
    </Container >
  )
};