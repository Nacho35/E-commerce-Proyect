import React from "react";
import Gallery from "./Gallery";
import Home from "./Home";
import Navbar from "./Navbar";

const Parent = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Gallery />
    </div>
  );
};

export default Parent;
