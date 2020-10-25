import React from "react";
import "./Project.css";

export default class Project extends React.Component {
  render() {
    return (
      <div className="App">
        <br />
        <div id="try2">
          <div id={this.props.opacityProjects ? "try2leftT" : "try2leftF"}>
            <h3>Calculator</h3>
          </div>
          <div id={this.props.opacityProjects ? "try2rightT" : "try2rightF"}>
            <ul>
              <li>
                A Calculator has been implemented with operation like addition,
                subtraction, multiplicaiton, division, power and modulo
                operation.
              </li>
              <li>It can operate on both integer and floating numbers.</li>
              <li>Designed to interact dynamically with the user as well.</li>
              <li>
                <a
                  href="https://raw.githack.com/Pritam76/PersonalProjects/master/Calculator.html"
                  target="_blank"
                >
                  Demo? Click here!!
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="try22">
          <div id={this.props.opacityProjects ? "try22leftT" : "try22leftF"}>
            <ul>
              <li>
                A tool to calculate Volume and Surface Area of 3D figures (works
                offline also).
              </li>
              <li>Choose from wide vareity of containers for calculations</li>
              <li>Just enter the required inputs and get your answer.</li>
              <li>
                <a
                  href="https://raw.githack.com/Pritam76/PersonalProjects/master/Volume&SurfaceArea.html"
                  target="_blank"
                >
                  Demo? Click here!!
                </a>
              </li>
            </ul>
          </div>
          <div id={this.props.opacityProjects ? "try22rightT" : "try22rightF"}>
            <h3>Volume and Surface Area Calculator</h3>
          </div>
        </div>
        <div id="try2">
          <div id={this.props.opacityProjects ? "try2leftT" : "try2leftF"}>
            <h3>Weather24</h3>
          </div>
          <div id={this.props.opacityProjects ? "try2rightT" : "try2rightF"}>
            <ul>
              <li>
                A weather application that informs users about present weather
                conditions (temperature, humidity, etc.)
              </li>
              <li>
                {" "}
                Uses API calls from{" "}
                <a href="https://openweathermap.org">Open Weather</a> for
                getting weather data.
              </li>
              <li>Also gives average temperature data for past 3 days.</li>
              <li>
                <a
                  href="https://raw.githack.com/Pritam76/PersonalProjects/master/Weather.htm "
                  target="_blank"
                >
                  Demo? Click here!!
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="try22">
          <div id={this.props.opacityProjects ? "try22leftT" : "try22leftF"}>
            <ul>
              <li>Single Page Music Streaming Landing webpage</li>
              <li>
                Has option to sign into a page and create account with proper
                constraints check
              </li>
              <li>
                <a
                  href="https://raw.githack.com/Pritam76/PersonalProjects/master/prTunes.html"
                  target="_blank"
                >
                  Demo? Click here!!
                </a>
              </li>
            </ul>
          </div>
          <div id={this.props.opacityProjects ? "try22rightT" : "try22rightF"}>
            <h3>prTunes</h3>
          </div>
        </div>
        <div id="try2">
          <div id={this.props.opacityProjects ? "try2leftT" : "try2leftF"}>
            <h3>Exam Portal</h3>
          </div>
          <div id={this.props.opacityProjects ? "try2rightT" : "try2rightF"}>
            <ul>
              <li>
                A full-stack web application that helps schools or universities
                to conduct examination for their students
              </li>
              <li>
                Technolgies Used : JSP and servelet, HTML, CSS (Bootstrap 4),
                JavaScript (Vanilla), h2 database
              </li>
              <li>
                <a
                  href="https://github.com/Pritam76/ExamPortal"
                  target="_blank"
                >
                  Source Code? Click here!!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
