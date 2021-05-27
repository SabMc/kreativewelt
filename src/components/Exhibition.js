import React from "react";
import CardItem from "./CardItem";

import "./Exhibition.css";

import pH9 from "./images/pH9.jpg";
import pH13 from "./images/pH13.jpg";

function Exhibition() {
  return (
    <>
      {" "}
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
              path="/Gallery1"
            />
            <CardItem
              src={pH13}
              text="Ausstellung in zw"
              label="zw"
              path="/Gallery2"
            />
          </ul>{" "}
        </div>
      </div>
    </>
  );
}

export default Exhibition;
