import React from "react";
import "./styles.css";
import Page1 from "./Page1.js";
import Education from "./Education.js";
import Project from "./Project.js";
import TechSkills from "./TechSkills.js";
import Cards from "./Cards.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacityAbout: 0.4,
      educationME: false,
      opacityProjects: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    console.log("Done");
  }
  handleScroll(event) {
    if (window.scrollY > 90) this.setState({ opacityAbout: 1 });
    if (window.scrollY > 800) this.setState({ educationME: true });
    if (window.scrollY > 2000) this.setState({ opacityProjects: true });
  }
  render() {
    return (
      <div className="App">
        {/* starting page */}
        <Page1 />
        {/* Abouts */}
        <div id="about" style={{ opacity: this.state.opacityAbout }}>
          Hey, everyone!! This is me, Pritam Mishra, a final year student of
          Electronics and Communication Engineering in National Institute of
          Technology, Trichy. I was born and brought up in Bhubaneswar,Odisha. I
          interned in Wipro Limited in my pre final year summer internship(Jun
          2020 to Jul 2020) which involved around Java and Oracle Database and
          Power BI.
          <br />
          <br />I started with learning{" "}
          <span className="olivecolor">HTML, CSS, JS</span> before jumping into{" "}
          <span className="olivecolor">React JS</span>. I had been parallely
          learning JSP and Servlet technology. I am loving this technology and
          my advancements in this. I would love honing my skills in this domain.
          <br />
          <br />I have referred to{" "}
          <a href="https://www.freecodecamp.org" className="redcolor">
            FreeCodeCamp
          </a>{" "}
          and{" "}
          <a href="https://www.w3school.com" className="redcolor">
            w3school
          </a>{" "}
          and have been tryng out different miniprojects for learning these
          skills. I believe these practical skills and mini projects (links
          given below) done by me will benefit me a lot.
        </div>
        {/* Education */}
        <p className="sechead">Education</p>
        <Education classeducation={this.state.educationME} />
        {/* TechnicalSkillls */}
        <p className="sechead">Technical Skills</p>
        <TechSkills />
        {/* Miniprojects */}
        <p className="sechead" opacityProjects={this.state.opacityProjects}>
          Mini Projects
        </p>
        <Project opacityProjects={this.state.opacityProjects} />
        {/* Extra Cirricular */}
        <p className="sechead" opacityProjects={this.state.opacityProjects}>
          Extra Cirricular
        </p>
        <div id="row1extra">
          <Cards
            page1="Manager at Festember 2019"
            description="Festember (The National Level Inter-Collegiate Cultural Festival of NIT-Trichy) requires proper sponsorship, documentation and patronages which is ensured by this team."
          />
          <Cards
            page1="Background Music Director, Film Society of NIT-Trichy"
            description="Composed background music for short films made by Film Society, NITT using FLStudio software. I have given music in 6 films which are available on YouTube."
          />
          <Cards
            page1="Background Music Director, Thespian’s Society of NIT-Trichy:"
            description="The roles involves giving background music for plays performed by the Thespian Society of NIT, Trichy (dramatics club). This requires accompanying them to various competitions where they participate."
          />
          <Cards
            page1="Coordinator of Organizing Committee in NITTFEST 18"
            description="NITTFEST (The Inter-Departmental Cultural Festival of NIT-Trichy) OC gets quotations from vendors for smooth conduction of the fest."
          />
        </div>
        <footer>
          Designed by:
          <br />
          <b>Pritam Mishra</b>
          <br />
          <br />
          Want to contact? Scroll Up!!
        </footer>
      </div>
    );
  }
}

export default App;
