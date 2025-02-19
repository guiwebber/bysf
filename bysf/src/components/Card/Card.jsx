import React from "react";
import "./Card.css";
function Card({ name, description, image, price, type, spanType, prevPrice }) {
  return (
    <div className={`containerCard ${type}`}>
      <div className="divImg">
        <span className={`${spanType}`}>{type}</span>
        <img className="img" src={image} alt="" />
      </div>
      <div className="infosCard">
        <h4 className="name">{name}</h4>
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
          <div>
            <p className="installments">
              <span className="bold">3x</span> de{" "}
              <span className="bold">
                {(price / 3).toFixed(2).replace(".", ",")}
              </span>{" "}
              sem juros{" "}
            </p>
          </div>
          <button className="btnAdd"> + Adicionar</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
