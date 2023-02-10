import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Gallery from "./Gallery";
const index = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Gallery />
    </Fragment>
  );
};

export default index;
