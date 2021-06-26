import React from "react";
import "../App.css";
import "./Gallery.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


function Gallery2() {
  return (
    <>
      <div className="Gallery">
      <div className="back-arrow">
      <Link to="/Paintings" className="link-retour" >
                <FaArrowLeft className="arrow" />
              </Link>
        </div>
        <div className="Titel">
          <h1>BLUMEN</h1>
        </div>
        <div className="gallery_container">
          <div className="gallery_wrapper">in progress</div>
        </div>
      </div>
    </>
  );
}

export default Gallery2;
