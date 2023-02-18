import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Gallery from "./Gallery";
import Feature from "./Feature";
import Banner from "./Banner";
import CardsContainer from "./CardsContainer";
import FoodMenu from "./FoodMenu";
import ImagesTier from "./ImagesTier";
const index = () => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Gallery />
      <Feature />
      <Banner />
      <CardsContainer />
      <FoodMenu />
      <ImagesTier />
    </Fragment>
  );
};

export default index;
