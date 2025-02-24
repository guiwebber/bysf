import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

import { FaCheckCircle } from "react-icons/fa"; // Importando o ícone
import "./index.css";

import Popup from "./components/popup/Popup"; // Componente para o pop-up
function App() {
  const [cart, setCart] = useState({ items: 0, total: 0 });
  const [filteredProducts, setFilteredProducts] = useState([]); // Estado para os produtos filtrados

  const [popupMessage, setPopupMessage] = useState(null);
  const handleAddToCart = (price) => {
    setCart((prevCart) => ({
      items: prevCart.items + 1,
      total: prevCart.total + price,
    }));

    setPopupMessage(
      <div className="popup">
        <FaCheckCircle className="iconCheck"/>
        <p>Produto adicionado ao carrinho!</p>
      </div>
    );
    setTimeout(() => setPopupMessage(null), 3000); // Fechar após 3 segundos
  };

  // Função para atualizar os resultados da pesquisa
  const onResultsChange = (results) => {
    setFilteredProducts(results);
  };

  return (
    <div className="container">
      <Navbar cart={cart} onResultsChange={onResultsChange} />
      <Banner />
      <Products
        onAddToCart={handleAddToCart}
        filteredProducts={filteredProducts}
      />
      {popupMessage && <Popup message={popupMessage} />}
      <Footer />
    </div>
  );
}

export default App;
