import React from "react";
import "./Card.css";
export const Card = (props) => {
    const { name, username, email } = props.robot;
    return (
      <div className="bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5">
        <img src={`https://robohash.org/${username}`} alt="asta" />
        <div className="tc">
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
  }
