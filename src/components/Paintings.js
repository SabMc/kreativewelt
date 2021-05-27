import React from "react";
import CardItem from "./CardItem";

import pH9 from "./images/pH9.jpg";
import pH13 from "./images/pH13.jpg";

import "./Paintings.css";

function Paintings() {
  return (
    <>
      {" "}
      <div className="Paintings">
        <h1>Bilder von Lilly's Kreativer Welt</h1>
      </div>{" "}
      <div className="paintings_container">
        <div className="paintings_wrapper">
          {" "}
          <ul className="paintings_items">
            <CardItem
              src={pH9}
              text="Paintings from the Category Abstrakt"
              label="Abstrakt"
              path="/Gallery1"
            />
            <CardItem
              src={pH9}
              text="Paintings from the Category Blumen"
              label="Blumen"
              path="/Gallery2"
            />
            <CardItem
              src={pH13}
              text="Paintings from the Category Figürlich"
              label="Figürlich"
              path="/Gallery3"
            />
          </ul>{" "}
        </div>
      </div>
    </>
  );
}

export default Paintings;
