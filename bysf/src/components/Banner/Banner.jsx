import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./Banner.css";

import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
function Banner() {
  const [inputText, setInputText] = useState("");
  const [debouncedText, setDebouncedText] = useState(inputText);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [img1, img2, img3];

  const handleChangeInput = (e) => {
    setInputText(e.target.value);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length); 
      console.log(currentImage)
    }, 3000); 

    return () => clearInterval(intervalId); 

  }, []); 


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
    <div className="containerBanner">
      <img className="img" src={images[currentImage]} alt="" />

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
    </div>
  );
}

export default Banner;
