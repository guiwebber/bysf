import React, { useState, useEffect } from "react";
import "./Banner.css";

import img1 from "../../assets/images/img.jpeg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
function Banner() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [img1, img2, img3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length); 
      console.log(currentImage)
    }, 3000); 

    return () => clearInterval(intervalId); 

  }, []); 



  return (
    <div className="containerBanner">
      <img className="img" src={images[currentImage]} alt="" />
    </div>
  );
}

export default Banner;
