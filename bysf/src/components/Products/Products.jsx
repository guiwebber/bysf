// Products.js
import React, { useState } from "react";
import "./Products.css";
import Card from "../Card/Card";
import products from "../../../products.json";
import Modal from "../Modal/Modal";
import { FaTruck, FaCreditCard, FaBarcode } from "react-icons/fa";

function Products({ onAddToCart }) {  // Receber a função aqui
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Função para abrir o modal com os dados do produto
  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="containerFull">
      <div className="containerCondition">
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
      <div className="containerProducts">
        <div className="divPromo">
          <h1 className="titles">Promoção</h1>
          <div className="promoProducts">
            {products
              .filter((item) => item.type.toLowerCase() === "promoção")
              .map((item, index) => (
                <Card
                  key={index}
                  {...item}
                  onCardClick={handleCardClick}
                  onAddToCart={onAddToCart}  // Passar a função aqui
                />
              ))}
          </div>
        </div>

        <div>
          <h1 className="titles">Todos os produtos</h1>
          <div className="divProducts">
            {products
              .filter((item) => item.type.toLowerCase() === "")
              .map((item, index) => (
                <Card
                  key={index}
                  {...item}
                  onCardClick={handleCardClick}
                  onAddToCart={onAddToCart}  // Passar a função aqui
                />
              ))}
          </div>
        </div>
      </div>

      {/* Modal para mostrar detalhes do produto */}
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </div>
  );
}

export default Products;
