import React from "react";
import "./Page1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import profphoto from "./ProfileImage.jpg";

class Page1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classtranslsone: "soneatrributex",
      classtranslsone2: "sonevaluex"
    };
  }
  componentDidMount() {
    setTimeout(
      function () {
        //Start the timer
        this.setState({
          classtranslsone: "soneatrribute0",
          classtranslsone2: "sonevalue0"
        }); //After 1 second, set render to true
      }.bind(this),
      100
    );
  }

  render() {
    return (
      <div>
        <div id="start">
          <br />
          <br />
          <br />
          <br />
          <br />
          <div id="sone">
            <img
              id="profImg"
              alt="Profile Image"
              src={require("./ProfileImage.jpg")}
              // src="https://scontent.fbbi3-1.fna.fbcdn.net/v/t1.0-9/117735573_2692267404381939_5793367080162001014_o.jpg?_nc_cat=103&_nc_sid=730e14&_nc_ohc=PzIn6a9oq_cAX_Jn3ij&_nc_ht=scontent.fbbi3-1.fna&oh=891336524f75c39f0cccd31dc5841801&oe=5F5B7716"
            />
            <div id="sonerig">
              <br />
              <span id="name">Pritam Mishra</span>
              <br />
              <br />
              <b>Web Development Enthusiast</b>
              <br />
              <br />
              <div className={this.state.classtranslsone}>
                <b>Phone:</b>
              </div>
              <div className={this.state.classtranslsone2}>9078678747</div>
              <br />
              <div className={this.state.classtranslsone}>
                <b>Email:</b>
              </div>
              <div className={this.state.classtranslsone2}>
                pritam99mishra99@gmail.com
              </div>
              <br />
              <div className={this.state.classtranslsone}>
                <b>Address:</b>
              </div>
              2RB-13/7, Gopabandhu Nagar,
              <br />
              Bhubaneswar, Odisha
              <br />
              <br />
              <div className={this.state.classtranslsone}>
                <b>Date of Birth:</b>
              </div>
              <div className={this.state.classtranslsone2}>
                October 2nd, 1999
              </div>
              <br />
            </div>
          </div>
        </div>
        {this.state.one}
        <div id="stwo">
          <a
            href="https://www.facebook.com/pritam.mishra.1401/"
            className="buttonload"
            title="Facebook"
            target="_blank"
          >
            <i className="socialnetworkStart">
              <FontAwesomeIcon icon={faFacebook} />
            </i>
          </a>
          <a
            href="https://www.linkedin.com/in/pritam76mishra"
            className="buttonload"
            title="LinkedIn"
            target="_blank"
          >
            <i className="socialnetworkStart">
              <FontAwesomeIcon icon={faLinkedin} />
            </i>
          </a>
          <a
            href="https://www.instagram.com/_pritam___m/"
            className="buttonload"
            title="Instagram"
            target="_blank"
          >
            <i className="socialnetworkStart">
              <FontAwesomeIcon icon={faInstagram} />
            </i>
          </a>
          <a
            href="https://github.com/Pritam76/PersonalProjects"
            className="buttonload"
            title="GitHub"
            target="_blank"
          >
            <i className="socialnetworkStart">
              <FontAwesomeIcon icon={faGithub} />
            </i>
          </a>
        </div>
      </div>
    );
  }
}

export default Page1;
