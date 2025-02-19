import React from "react";
import "./Modal.css"; // Crie seu estilo de modal
import ButtonAdd from "../ButtonAdd/ButtonAdd";
function Modal({ isOpen, onClose, product }) {
  if (!isOpen || !product) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div>
          <button className="closeBtn" onClick={onClose}>
            X
          </button>
          <h2>{product.name}</h2>
          <img className="imgModal" src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <p>R$ {product.price.toFixed(2).replace(".", ",")}</p>
          {product.prevPrice !== 0 && (
            <span>De: R$ {product.prevPrice.toFixed(2).replace(".", ",")}</span>
          )}
        </div>
        <ButtonAdd />
      </div>
    </div>
  );
}

export default Modal;
