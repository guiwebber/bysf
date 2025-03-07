import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
function Footer() {
  return (
    <div className="divFooter">
      <div className="linksFooter">
        <img className="logo" src={logo} alt="" />
        <h3 className="titleFooter">Institucional</h3>
        <a className="aFooter" href="#">
          Contato
        </a>
        <a className="aFooter" href="#">
          Quem somos
        </a>
        <a className="aFooter" href="#">
          Políticas de devolução
        </a>
      </div>
      <div className="socialMedias">
        <h3 className="titleFooter">Redes sociais</h3>
        <a className="aFooter" href="#">
          {/* <FaFacebook className="iconsSocial facebook" /> */}
           Facebook
        </a>
        <a className="aFooter" href="#">
          {/* <FaInstagram className="iconsSocial instagram" /> */}
           Instagram
        </a>
        <a className="aFooter" href="#">
          {/* <FaWhatsapp className="iconsSocial whatsapp" /> */}
           Whatsapp
        </a>
      </div>
      <div className="location">
        <h3 className="titleFooter">Onde estamos localizados</h3>
        <iframe
          className="frameMap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d660.4828563785156!2d-52.224599900752814!3d-27.884942401355932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e2e2831a051827%3A0x367d627f67668bdf!2sAv.%20Severiano%20de%20Almeida%20-%20Get%C3%BAlio%20Vargas%2C%20RS%2C%2099900-000!5e0!3m2!1spt-BR!2sbr!4v1737413094185!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Footer;
