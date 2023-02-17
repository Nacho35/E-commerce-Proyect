import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Gallery from "./Gallery";
import Feature from "./Feature";
import Banner from "./Banner";
import CardsContainer from "./CardsContainer";
import FoodMenu from "./FoodMenu";
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
    </Fragment>
  );
};

export default index;
