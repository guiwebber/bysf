import React from "react";
import "./Products.css";
import Card from "../Card/Card";
import products from "../../../products.json";
import { FaTruck, FaCreditCard, FaBarcode } from "react-icons/fa";

function Products() {
  return (
    <div className="containerProducts">
      <div className="divConditions">
        <div className="condition">
          <FaTruck className="iconsConditions" />
          <p> Entrega em todo o Brasil</p>
        </div>
        <div className="condition">
          <FaBarcode className="iconsConditions" />
          <p> Pague no Boleto ou PIX</p>
        </div>
        <div className="condition">
          <FaCreditCard className="iconsConditions" />
          <p>Em até 6 x no Cartão</p>
        </div>
      </div>
      <h2>Promoções</h2>
      <div className="divProducts">
        {products.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
