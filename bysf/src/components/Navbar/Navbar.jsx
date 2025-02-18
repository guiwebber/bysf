import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import MenuHamburguer from "../MenuHamburguer/MenuHamburguer";
import logo from "../../assets/images/logo.png";
function Navbar() {
  const [inputText, setInputText] = useState("");

  const [debouncedText, setDebouncedText] = useState(inputText);
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
    <div className="containerNavbar">
      <div className="flex">
        <div className="logoNav">
          <img src={logo} alt="" />
        </div>
        <div className="divInput">
          <input
            onChange={handleChangeInput}
            type="text"
            placeholder="O que você precisa?"
          />

          <button className="btnSearch">
            <FaSearch className="iconSearch" />
          </button>
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
