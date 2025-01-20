import React from "react";
import "./Card.css";
function Card({ name, description, image, price, type, spanType, prevPrice }) {
  console.log(type);
  return (
    <div className={`containerCard ${type}`}>
      <div className="divImg">
        <span className={`${spanType}`}>{type}</span>
        <img className="img" src={image} alt="" />
      </div>
      <div className="infosCard">
        <h3 className="name">{name}</h3>
        <p className="description">{description}</p>
        <div className="divPrice">
          <span className="prevPrice">{prevPrice}</span>
          <p className="price">R$ {price}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
