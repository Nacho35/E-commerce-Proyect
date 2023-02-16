import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Gallery from "./Gallery";
import Feature from "./Feature";
import Banner from "./Banner";
import CardsContainer from "./CardsContainer";
const index = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Gallery />
      <Feature />
      <Banner />
      <CardsContainer />
    </Fragment>
  );
};

export default index;
