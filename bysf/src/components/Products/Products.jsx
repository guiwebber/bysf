import React, { useState } from "react";
import "./Products.css";
import Card from "../Card/Card";
import products from "../../../products.json";
import Modal from "../Modal/Modal";  // Importe o Modal
import { FaTruck, FaCreditCard, FaBarcode } from "react-icons/fa";

function Products() {
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
          <Card key={index} {...item} onCardClick={handleCardClick} />
        ))}
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
