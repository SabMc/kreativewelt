import React from "react";
import CardItem from "../components/CardItem";
import Navbar from "../components/Navbar";

import pH9 from "../components/images/pH9.jpg";
import pH13 from "../components/images/pH13.jpg";

import "./Paintings.css";

function Paintings() {
  return (
    <>
      <Navbar />
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
