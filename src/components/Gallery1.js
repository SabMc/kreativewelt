import React from "react";
import "../App.css";
import Presentation from "./Presentation";
import "./Gallery.css";

import pH9 from "./images/pH9.jpg";
import pH13 from "./images/pH13.jpg";
import titelbild from "./images/titelbild.jpg";

//import { Gallery1Items } from "./Gallery1Items";

function Gallery1() {
  return (
    <>
      <div className="Gallery">
        <h1>Alle abstrakten Bilder</h1>
        <div className="gallery_container">
          <div className="gallery_wrapper">
            <Presentation
              src={pH9}
              alt="Isle of Wight"
              details="Isle of wight"
              size="100x140 cm"
              className="horizontal"
            />
          </div>
          <div className="gallery_wrapper">
            <Presentation
              src={pH13}
              alt="The Needles"
              details="The Needles"
              size="100x140 cm"
              className="horizontal"
            />
          </div>
          <div className="gallery_wrapper">
            <Presentation
              src={titelbild}
              alt="Blaues Bild"
              details="Blaues Bild"
              size="100x140 cm"
              className="vertical"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery1;
