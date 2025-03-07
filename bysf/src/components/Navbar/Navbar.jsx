import React, { useState } from "react";
import { FaShoppingCart, FaSignInAlt, FaUser, FaTruck } from "react-icons/fa";
import "./Navbar.css";
import MenuHamburguer from "../MenuHamburguer/MenuHamburguer";
import logo from "../../assets/images/logo.png";
import SearchInput from "../SearchInput/SearchInput";

function Navbar({ cart, onResultsChange }) {
  return (
    <div className="containerNavbar">
      <div className="containerLogin">
        <div className="divSignInUp">
          <FaSignInAlt className="iconLogin" />
          <p>
            <a href="#">Login</a> | <a href="#">Cadastre-se</a>
          </p>
        </div>
        <div className="divSignInUp">
          <FaUser className="iconMyAcc" />
          <p>
            <a href="#">Minha conta</a>
          </p>
        </div>
        <div className="divSignInUp">
          <FaTruck className="iconTracking" />
          <p>
            <a href="#">Rastreio rápido</a>
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="logoNav">
          <img src={logo} alt="" />
        </div>
        <div className="desktopInput">
          {/* Passando o onResultsChange para o SearchInput */}
          <SearchInput onResultsChange={onResultsChange} />
        </div>
        <div className="rightNavDiv">
          <div className="divCart">
            <FaShoppingCart className="iconCart" />
            <p className="itensCart">{cart.items}</p>
          </div>
          <div className="divTextCart">
            <p>Meu carrinho</p>
            <p className="price">R$ {cart.total.toFixed(2).replace(".", ",")}</p>
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
      <MenuHamburguer className={`hamburguer`} items={cart.items} total={cart.total.toFixed(2).replace(".", ",")} />
    </div>
  );
}

export default Navbar;
