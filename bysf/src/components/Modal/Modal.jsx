import React from "react";
import "./Modal.css"; // Crie seu estilo de modal
import ButtonAdd from "../ButtonAdd/ButtonAdd";
function Modal({ isOpen, onClose, product }) {
  if (!isOpen || !product) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button>left</button>
        <div className="divContent">
          <button className="closeBtn" onClick={onClose}>
            X
          </button>
          <h2>{product.name}</h2>
          <img className="imgModal" src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <div>
            {product.prevPrice !== 0 && (
              <span className="promo">
                R$ {product.prevPrice.toFixed(2).replace(".", ",")}
              </span>
            )}
            <p>R$ {product.price.toFixed(2).replace(".", ",")}</p>
          </div>
          <ButtonAdd />
        </div>
        <button>right</button>
      </div>
      <div className="otherImgs">
        <p>other imgs</p>
      </div>
    </div>
  );
}

export default Modal;
