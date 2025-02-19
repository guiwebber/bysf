// src/components/SearchInput/SearchInput.js
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchInput.css";
import data from "../../../products.json";
import img1 from "../../assets/images/img1.jpg";

function SearchInput({ onResultsChange }) {
  const [inputText, setInputText] = useState("");
  const [debouncedText, setDebouncedText] = useState(inputText);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showAllResults, setShowAllResults] = useState(false);

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
      onResultsChange(results); // Send results to parent
    } else {
      setFilteredProducts([]);
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

  return (
    <div className="divInput">
      <input
        onChange={handleChangeInput}
        onKeyPress={handleKeyPress}
        type="text"
        placeholder="O que você precisa?"
      />
      <button className="btnSearch">
        <FaSearch className="iconSearch" />
      </button>
      {debouncedText && (
        <div className="searchResults">
          {(showAllResults
            ? filteredProducts
            : filteredProducts.slice(0, 3)
          ).map((item, index) => (
            <div key={index} className="searchItem">
              <img src={item.image} alt="" />
              <div className="textSearch">
              <p>{item.name}</p>
              <p className="priceSearch">R$ {item.price.toFixed(2).replace('.', ',')}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchInput;
