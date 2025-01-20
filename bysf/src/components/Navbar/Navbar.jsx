import React, { useState, useEffect } from "react";
import "./Navbar.css";
import MenuHamburguer from "../MenuHamburguer/MenuHamburguer";
import logo from "../../assets/images/logo.png";
function Navbar() {
  return (
    <div className="containerNavbar">
      <div className="logoNav">
        <img src={logo} alt="" />
      </div>
        <ul className="list">
          <li className="listItem ">
            <a className="itemLink firstLink" href="#">
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

      <MenuHamburguer className={`hamburguer`} />
    </div>
  );
}

export default Navbar;
