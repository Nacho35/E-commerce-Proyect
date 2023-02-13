import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Gallery from "./Gallery";
import Feature from "./Feature";
const index = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Gallery />
      <Feature />
    </Fragment>
  );
};

export default index;
