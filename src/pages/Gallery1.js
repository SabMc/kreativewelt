import React from "react";
import "../App.css";
import Presentation from "../components/Presentation";
import "./Gallery.css";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import pH9 from "../components/images/pH9.jpg";
import pH13 from "../components/images/pH13.jpg";
import titelbild from "../components/images/titelbild.jpg";
import pH2 from "../components/images/pH2.jpg";
import pH3 from "../components/images/pH3.jpg";
import pH5 from "../components/images/pH5.jpg";

function Gallery1() {
  return (
    <>
      <div className="Gallery">
      <div className="back-arrow">
      <Link to="/Paintings" className="link-retour" >
                <FaArrowLeft className="arrow" />
              </Link>
        </div>
        <div className="Titel">
          <h1>ABSTRAKT</h1>
        </div>
        <div className="gallery_container">
          <div className="gallery_wrapper">
            <Presentation
              src={pH9}
              alt="Isle of Wight"
              details="Isle of wight"
              size="100x140 cm"
            />
          </div>
          <div className="gallery_wrapper">
            <Presentation
              src={pH13}
              alt="The Needles"
              details="The Needles"
              size="100x140 cm"
            />
          </div>
          <div className="gallery_wrapper">
            <Presentation
              src={titelbild}
              alt="Blaues Bild"
              details="Blaues Bild"
              size="100x140 cm"
            />
          </div>
          <div className="gallery_wrapper">
            <Presentation
              src={pH2}
              alt="Isle of Wight"
              details="Isle of wight"
              size="100x140 cm"
            />
          </div>
          <div className="gallery_wrapper">
            <Presentation
              src={pH3}
              alt="Isle of Wight"
              details="Isle of wight"
              size="100x140 cm"
            />
          </div>
          <div className="gallery_wrapper">
            <Presentation
              src={pH5}
              alt="Isle of Wight"
              details="Isle of wight"
              size="100x140 cm"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery1;
