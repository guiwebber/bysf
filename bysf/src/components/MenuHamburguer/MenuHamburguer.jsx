import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSearch, FaShoppingCart } from "react-icons/fa";
import "./MenuHamburguer.css";

const MenuHamburguer = ({ teste }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [debouncedText, setDebouncedText] = useState(inputText);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChangeInput = (e) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(inputText);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputText]);

  useEffect(() => {
    console.log(debouncedText);
  }, [debouncedText]);

  return (
    <div className={`hamburguer`}>
      <button className="btnHamburguer" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaTimes className="icon" />
        ) : (
          <FaBars className="icon" />
        )}
      </button>
      <div className={`divList ${isMenuOpen ? "active" : ""}`}>
        <ul className="listMob">
          <li className="listItem">
            <a className="itemLink" href="#">
              Toda a loja
            </a>
          </li>
          <li className="listItem">
            <a className="itemLink" href="#">
              Cozinha
            </a>
          </li>
          <li className="listItem">
            <a className="itemLink" href="#">
              Banho
            </a>
          </li>
          <li className="listItem">
            <a className="itemLink" href="#">
              Enfeites
            </a>
          </li>
          <li className="listItem">
            <a className="itemLink" href="#">
              Guirlandas
            </a>
          </li>
        </ul>
        <div className="divInputMob">
          <input
            onChange={handleChangeInput}
            type="text"
            placeholder="O que você precisa?"
          />
          <button className="btnSearchMob">
            <FaSearch className="iconSearchMob" />
          </button>
        </div>
        <div className="cartDiv">
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
    </div>
  );
};

export default MenuHamburguer;
