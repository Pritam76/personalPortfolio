import React from "react";
import ReactDOM from "react-dom";
import "./TechSkills.css";

class TechSkills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "Click on a slab the left of this slab to know more"
    };
  }

  render() {
    return (
      <div id="techskillholder">
        <div id="techskillholderLeft">
          <p
            onClick={() =>
              this.setState({
                description:
                  "Quarantine 2020 gave me enough free time to learn something new and add skills to my quiver. Since Front-end development has been one of the hot topics and is supposed to remain one for a long period of time, I decided to learn it.I started with learning HTML and CSS before jumping into JavaScript. The miniprojects have used Vanilla Javascript (because they were made before this page)!!"
              })
            }
          >
            <b>HTML, CSS, JS</b>
          </p>
          <p
            onClick={() =>
              this.setState({
                description:
                  "React is an open-source JavaScript library for building user interfaces and components, maintained by Facebook and a community of individual developers and companies. I started learning React JS after making some projects in normal JS. Doing projects in these technology has benifitted me a lot compared to just going through texts available online !! Neccesity is the mother of (learning another new concept in React) and this has worked pretty good for me till now. "
              })
            }
          >
            <b>React JS</b>
          </p>
          <p
            onClick={() =>
              this.setState({
                description:
                  "Being in an ICSE affiliated School in class 9 and 10, I was exposed to Java programming in early years of my life. Since then I have been using Java for competitve coding in HackerRank and CodeChef. Moreover my pre-final year summer internship with Wipro Lmtd. was totally based on Java where I had to create an API using Jersey framework which helped me in getting newer perspective in JavaEE, JSP and Servlet tecehnologies !!"
              })
            }
          >
            <b>Java</b>
          </p>
          <p
            onClick={() =>
              this.setState({
                description:
                  "In 5th sem of my engineering degree, I took a course in Database Management Systems where I learned in depth about theories and queries in SQL. In my pre-final year summer internship with Wipro Lmtd, I had to deal with Oracle database and get data from it and provide it to front-end. My internship involved around two different versions of database giving me insights about a new and an old version of database."
              })
            }
          >
            <b>Oracle Database</b>
          </p>
          <p
            onClick={() =>
              this.setState({
                description:
                  "Power BI is a business analytics service developed and maintained by Microsoft which aims to provide interactive visualizations and business intelligence capabilities with an interface simple enough for end users to create their own reports and dashboards. The API developed in my summer internship provided data to this software so that graphs and charts can be plotted so as to aid the client to make wise decisions."
              })
            }
          >
            <b>Power BI</b>
          </p>
          <p
            onClick={() =>
              this.setState({
                description:
                  "Verilog is a hardware description language used to model electronic systems. It is most commonly used in the design and verification of digital circuits at the register-transfer level of abstraction. We had a labaratory in which we have to use Verilog. But I learned a lot in depth during my summer internship after 2nd year in IIT Hyderabad. This was an electronics domain research internship from Jun '19 to Jul '19. "
              })
            }
          >
            <b>Verilog</b>
          </p>
        </div>
        <div id="techskillholderRight">
          <p id="descriptiontechskill">{this.state.description}</p>
        </div>
      </div>
    );
  }
}

export default TechSkills;
