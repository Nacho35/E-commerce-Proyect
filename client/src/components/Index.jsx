import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Gallery from "./Gallery";
import Feature from "./Feature";
import Banner from "./Banner";
import CardsContainer from "./CardsContainer";
import FoodMenu from "./FoodMenu";
import ImagesTier from "./ImagesTier";
import Form from "./Form";
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
      <Form />
    </Fragment>
  );
};

export default index;
