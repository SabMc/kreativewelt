import React from "react";
import CardItem from "../components/CardItem";
import Navbar from "../components/Navbar";

import "./Exhibition.css";

import pH9 from "../components/images/pH9.jpg";
import pH13 from "../components/images/pH13.jpg";

function Exhibition() {
  return (
    <>
      <Navbar />
      <div className="Exhibition">
        <h1>Ausstellungen von Lilly's Kreativer Welt</h1>
      </div>{" "}
      <div className="paintings_containter">
        <div className="paintings_wrapper">
          {" "}
          <ul className="paintings_items">
            <CardItem
              src={pH9}
              text="Ausstellung in xy"
              label="xy"
              path="#"
            />
            <CardItem
              src={pH13}
              text="Ausstellung in zw"
              label="zw"
              path="#"
            />
          </ul>{" "}
        </div>
      </div>
    </>
  );
}

export default Exhibition;
