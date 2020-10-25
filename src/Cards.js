import "./Cards.css";
import React from "react";

function Cards(props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h2>{props.page1}</h2>
        </div>
        <div className="flip-card-back">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
