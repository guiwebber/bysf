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
          <p className="itensCart">0</p>
          <FaShoppingCart className="iconCart" />
          </div>
          <div>Meu carrinho</div>
        </div>
      </div>
      <div className="subContainerNav">
        <ul className="list">
          <li className="listItem">
            <a href="#" className="itemLink">
              ITEM
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="itemLink">
              ITEM
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="itemLink">
              ITEM
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="itemLink">
              ITEM
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="itemLink">
              ITEM
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="itemLink">
              ITEM
            </a>
          </li>
        </ul>
      </div>
      <MenuHamburguer className={`hamburguer`} />
    </div>
  );
}

export default Navbar;
