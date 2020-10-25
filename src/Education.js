import React from "react";
import "./Education.css";

class Education extends React.Component {
  render() {
    return (
      <div>
        <div className="flexcontainer">
          <div
            className={
              this.props.classeducation ? "EducationLeftT" : "EducationLeftF"
            }
          >
            <br />
            <b>2017-present</b>
            <br />
            Bachelor of Technology
          </div>
          <div
            className={
              this.props.classeducation ? "EducationRightT" : "EducationRightF"
            }
          >
            <b>National Institute of Technology, Tiruchirappalli </b>
            <br />
            Electronics and Communication Engineering <br />
            (minor in CSE)
            <br />
            <span className="mark">CGPA : 9.02</span>
          </div>
        </div>
        <div className="flexcontainer">
          <div
            className={
              this.props.classeducation ? "EducationLeftT" : "EducationLeftF"
            }
            style={{ borderColor: "goldenrod" }}
          >
            <br />
            <b>2015-2017</b>
            <br />
            College
          </div>
          <div
            className={
              this.props.classeducation ? "EducationRightT" : "EducationRightF"
            }
          >
            <b>D.A.V. PUBLIC SCHOOL,BHUBANESWAR</b>
            <br />
            CBSE(Central Board of Secondary Education)
            <br />
            <span className="mark">94.6%</span>
          </div>
        </div>
        <div className="flexcontainer">
          <div
            className={
              this.props.classeducation ? "EducationLeftT" : "EducationLeftF"
            }
          >
            <br />
            <b>2005-2015</b>
            <br />
            School
            <br />
          </div>
          <div
            className={
              this.props.classeducation ? "EducationRightT" : "EducationRightF"
            }
          >
            <b>STEWART SCHOOL,BHUBANESWAR</b>
            <br />
            ICSE(Indian Council of Secondary Education)
            <br />
            <span className="mark">97.17%</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
