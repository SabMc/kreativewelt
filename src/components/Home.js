import React from "react";
import About from "./About";
import Contact from "./Contact";

import "./Home.css";

function Home() {
  return (
    <>
      <div className="Home">
        <div className="Placeholder">
          <h1>Lilly's Kreative Welt</h1>
        </div>
        <About />
        <Contact />
      </div>
    </>
  );
}

export default Home;
