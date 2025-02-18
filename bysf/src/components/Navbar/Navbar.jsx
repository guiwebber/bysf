import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import MenuHamburguer from "../MenuHamburguer/MenuHamburguer";
import logo from "../../assets/images/logo.png";
import data from "../../../products.json";

function Navbar() {
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
    } else {
      setFilteredProducts([]);
    }
  }, [debouncedText]);

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
    <div className="containerNavbar">
      <div className="flex">
        <div className="logoNav">
          <img src={logo} alt="" />
        </div>
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
              {(showAllResults ? filteredProducts : filteredProducts.slice(0, 3)).map((item, index) => (
                <div key={index} className="searchItem">
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="rightNavDiv">
          <div className="divCart">
            <FaShoppingCart className="iconCart" />
            <p className="itensCart">0</p>
          </div>
          <div className="divTextCart">
            <p>Meu carrinho</p>
            <p className="price">R$ 00,00</p>
          </div>
        </div>
      </div>
      <div className="subContainerNav">
        <ul className="list">
          <li className="listItem">
            <a href="#" className="itemLink">
              Toda a loja
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="itemLink">
              Guirlanda
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="itemLink">
              Cozinha
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="itemLink">
              Banho
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="itemLink">
              Enfeites
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="itemLink">
              Panos
            </a>
          </li>
        </ul>
      </div>
      <MenuHamburguer className={`hamburguer`} />
    </div>
  );
}

export default Navbar;
