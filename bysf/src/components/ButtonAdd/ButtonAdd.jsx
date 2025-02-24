// ButtonAdd.jsx
import React from "react";
import "./ButtonAdd.css";

function ButtonAdd({ onAddToCart }) {
  return (
    <button className="btnAdd" onClick={onAddToCart}>
      + Adicionar
    </button>
  );
}

export default ButtonAdd;
