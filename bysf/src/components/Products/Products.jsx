import React from "react";
import "./Products.css";
import Card from "../Card/Card";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
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
      <h1>Promoções</h1>
      <div className="divProducts">
        <Card
          name={"Produto 1"}
          description={"Descrição do produto 1"}
          image={img1}
          price={"2,99"}
          type={"Promoção"}
          spanType={"spanPromo"}
          prevPrice={"5,99"}
        />
        <Card
          name={"Produto 2"}
          description={"Descrição do produto 2"}
          image={img2}
          price={"11,99"}
          type={"Mais vendidos"}
          spanType={"spanTopSell"}
        />
        <Card
          name={"Produto 3"}
          description={"Descrição do produto 3"}
          image={img3}
          price={"22,99"}
          type={"Novo"}
          spanType={"spanNew"}
        />
        <Card
          name={"Produto 4"}
          description={"Descrição do produto 4"}
          image={img1}
          price={"52,99"}
          type={"Default"}
          spanType={"spanDefault"}
        />
      </div>
    </div>
  );
}

export default Products;
