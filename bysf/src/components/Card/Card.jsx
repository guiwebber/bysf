// Card.jsx
import React from "react";
import "./Card.css";
import ButtonAdd from "../ButtonAdd/ButtonAdd";

function Card({
  name,
  description,
  image,
  price,
  type,
  spanType,
  prevPrice,
  onCardClick,
  onAddToCart, // Passar a função para o Card
}) {
  // Função para chamar o onAddToCart com nome e preço
  const handleAddToCart = () => {
    onAddToCart(price, name); // Passa o preço e o nome do produto para a função
  };

  return (
    <div className={`containerCard ${type}`}>
      <div
        className="divImg"
        onClick={() =>
          onCardClick({ name, description, image, price, type, prevPrice })
        }
      >
        <span className={`${spanType}`}>{type}</span>
        <img className="img" src={image} alt={name} />
      </div>
      <div className="infosCard">
        <h4
          className="name"
          onClick={() =>
            onCardClick({ name, description, image, price, type, prevPrice })
          }
        >
          {name}
        </h4>
        <div className="divPrice">
          <div className="flex">
            <span className="prevPrice">
              {prevPrice !== 0 && (
                <span className="prevPrice">
                  <span>R$ </span>
                  {prevPrice.toFixed(2).replace(".", ",")}
                </span>
              )}
            </span>
            <p className="price">R$ {price.toFixed(2).replace(".", ",")}</p>
          </div>
          <p className="installments">
            <span className="bold">3x</span> de{" "}
            <span className="bold">
              {(price / 3).toFixed(2).replace(".", ",")}
            </span>
          </p>
          <ButtonAdd onAddToCart={handleAddToCart} /> {/* Passa a função handleAddToCart */}
        </div>
      </div>
    </div>
  );
}

export default Card;
