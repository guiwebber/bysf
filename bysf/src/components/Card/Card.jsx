import React from "react";
import "./Card.css";
import img from '../../assets/images/img1.jpg'
function Card({ name, description, image, price, type, spanType, prevPrice, onCardClick }) {
  return (
    <div className={`containerCard ${type}`} >
      <div className="divImg" onClick={() => onCardClick({ name, description, image, price, type, prevPrice })}>
        <span className={`${spanType}`}>{type}</span>
        <img className="img" src={img} alt={name} />
      </div>
      <div className="infosCard">
        <h4 className="name" onClick={() => onCardClick({ name, description, image, price, type, prevPrice })}>{name}</h4>
        <div className="divPrice">
          <div className="flex">
            <span className="prevPrice">
              {prevPrice !== 0 && (
                <span className="prevPrice">
                  {prevPrice.toFixed(2).replace(".", ",")}
                </span>
              )}
            </span>
            <p className="price">R$ {price.toFixed(2).replace(".", ",")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
