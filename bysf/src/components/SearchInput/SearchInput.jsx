import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchInput.css";
import data from "../../../products.json";
import Modal from "../Modal/Modal";

function SearchInput({ onResultsChange }) {
  const [inputText, setInputText] = useState("");
  const [debouncedText, setDebouncedText] = useState(inputText);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [lastResults, setLastResults] = useState([]); // 🔹 Salva os últimos resultados
  const [showAllResults, setShowAllResults] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const searchRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(inputText);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputText]);

  useEffect(() => {
    if (debouncedText) {
      const results = data.filter((item) =>
        item.name.toLowerCase().includes(debouncedText.toLowerCase())
      );
      setFilteredProducts(results);
      setLastResults(results); // 🔹 Salva os últimos resultados encontrados
      onResultsChange(results);
    } else {
      setFilteredProducts([]);
      setLastResults([]);
      onResultsChange([]);
    }
  }, [debouncedText, onResultsChange]);

  const handleChangeInput = (e) => {
    setInputText(e.target.value);
    setShowAllResults(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setShowAllResults(true);
    }
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setFilteredProducts([]); // 🔹 Fecha a lista de resultados ao abrir o modal
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setFilteredProducts([]); // 🔹 Esconde os resultados ao clicar fora
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="divInput" ref={searchRef}>
      <input
        onChange={handleChangeInput}
        onKeyPress={handleKeyPress}
        onFocus={() => setFilteredProducts(lastResults)} 
        type="text"
        placeholder="O que você precisa?"
      />
      <button className="btnSearch">
        <FaSearch className="iconSearch" />
      </button>

      {filteredProducts.length > 0 && (
        <div className="searchResults">
          {(showAllResults ? filteredProducts : filteredProducts.slice(0, 3)).map((item, index) => (
            <div key={index} className="searchItem" onClick={() => openModal(item)}>
              <img src={item.image} alt={item.name} />
              <div className="textSearch">
                <p>{item.name}</p>
                <p className="priceSearch">R$ {item.price.toFixed(2).replace('.', ',')}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal} product={selectedProduct} />
    </div>
  );
}

export default SearchInput;
