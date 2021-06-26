import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Contact from "../components/Contact";


function Home() {
  return (
    <>
      <div className="Home">
      <Navbar />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default Home;
