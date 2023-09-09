import React from "react";
import Beer from "./types/Beer";

const Card: React.FC<Beer> = ({ name, tagline, image_url, volume, ph, food_pairing }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <h3>{name}</h3>
          <div className="image-crop">
            <img className="avatar" src={image_url}></img>
          </div>
          <div className="bio">
            <p>{tagline}</p>
          </div>
          <div className="stats">
            <div className="col">
              <p className="stat">{volume.value}</p>
              <p className="label">{volume.unit}</p>
            </div>{" "}
            <div className="col">
              <p className="stat">{ph}</p>
              <p className="label">Ph</p>
            </div>
          </div>
        </div>
        <div className="card-back">
          <h3>{name}</h3>
          <h4>Food Pairing</h4>
          <ul>
            {food_pairing.slice(0, 3).map((pairing, i) => (
              <li key={i}>{pairing}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
