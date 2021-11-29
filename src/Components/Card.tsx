import React from "react";
import "./Card.css";
import aesthetic from "../assets/aesthetic.jpg";

interface Information {
  name: String;
  job: String;
  about: String;
}

const changeURL = (): void => {
  window.location.assign("https://www.instagram.com/nguyen_isfine/");
};

function Card(props: Information) {
  return (
    <div className="Card">
      <div className="upper-container">
        <div className="img-container">
          <img src={aesthetic} alt="Aesthetic" />
        </div>
      </div>
      <div className="lower-container">
        <h3>{props.name}</h3>
        <h4>{props.job}</h4>
        <p>{props.about}</p>
        <button onClick={changeURL}>Visit me here</button>
      </div>
    </div>
  );
}

export default Card;
