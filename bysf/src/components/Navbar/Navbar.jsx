import React, { useState, useEffect } from "react";
import "./Navbar.css";
import MenuHamburguer from "../MenuHamburguer/MenuHamburguer";
import logo from "../../assets/images/logo.png";
import { FaSearch } from "react-icons/fa";
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
      <div className="divList">
        <ul className="list">
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
      </div>

      <MenuHamburguer className="hamburguer" />
    </div>
  );
}

export default Navbar;
