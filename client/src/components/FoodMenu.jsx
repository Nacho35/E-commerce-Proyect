import React from "react";
import { useState } from "react";
import Icon from "../assets/food.svg";
import Pic1 from "../assets/product-1.jpg";
import Pic2 from "../assets/product-2.jpg";
import Pic3 from "../assets/product-3.jpg";
import Pic4 from "../assets/product-4.jpg";
import Pic5 from "../assets/product-5.jpg";
import Pic6 from "../assets/product-6.jpg";
import Pic7 from "../assets/product-7.jpg";
import Pic8 from "../assets/product-8.jpg";
import Pic9 from "../assets/product-9.jpg";
import Pic10 from "../assets/product-10.jpg";
import Pic11 from "../assets/product-11.jpg";
import Pic12 from "../assets/product-12.jpg";
import Pic13 from "../assets/product-13.jpg";
import Pic14 from "../assets/product-14.jpg";
import Pic15 from "../assets/product-15.jpg";
import Pic16 from "../assets/product-16.jpg";
import Pic17 from "../assets/product-17.jpg";
import Pic18 from "../assets/product-18.jpg";
import Pic19 from "../assets/product-19.jpg";
import Pic20 from "../assets/product-20.jpg";
import Pic21 from "../assets/product-21.jpg";
import Pic22 from "../assets/product-22.jpg";
import Pic23 from "../assets/product-23.jpg";
import Pic24 from "../assets/product-24.jpg";
import Pic25 from "../assets/product-25.jpg";
import {
  Box,
  Box2,
  Box3,
  Box4,
  BoxBtn,
  BoxImg,
  Btn,
  I,
  Img,
  Price,
  Text,
  Title,
  TitleImg,
} from "../styles/styledFoodMenu";

const FoodMenu = () => {
  const images = [
    {
      src: Pic1,
      title: "Double Cheese Pizza",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$15.30",
      type: "pizzas",
    },
    {
      src: Pic2,
      title: "Seafood",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$23.99",
      type: "all",
    },
    {
      src: Pic3,
      title: "Double mac burger",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$13.80",
      type: "burgers",
    },
    {
      src: Pic4,
      title: "Pasta",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$16.99",
      type: "pasts",
    },
    {
      src: Pic5,
      title: "Beef cheese burger",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$11.50",
      type: "burgers",
    },
    {
      src: Pic6,
      title: "Double Cheese Pizza",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$15.30",
      type: "pizzas",
    },
    {
      src: Pic7,
      title: "Lemonade",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$5.00",
      type: "drinks",
    },
    {
      src: Pic8,
      title: "Chicken burger",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$14.35",
      type: "burgers",
    },
    {
      src: Pic9,
      title: "Grill Meat",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$16.00",
      type: "steaks",
    },
    {
      src: Pic10,
      title: "Specialty of the house",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$25.00",
      type: "steaks",
    },
    {
      src: Pic11,
      title: "Chicken legs",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$14.00",
      type: "steaks",
    },
    {
      src: Pic12,
      title: "Loin meat with vegetables",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$20.00",
      type: "steaks",
    },
    {
      src: Pic13,
      title: "Roman salad",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$12.40",
      type: "salads",
    },
    {
      src: Pic14,
      title: "Thousands of salads to suit you",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$13.50",
      type: "salads",
    },
    {
      src: Pic15,
      title: "Vegetable casserole",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$11.10",
      type: "salads",
    },
    {
      src: Pic16,
      title: "Brownies",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$10.00",
      type: "deserts",
    },
    {
      src: Pic17,
      title: "Strawberry cake",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$8.50",
      type: "deserts",
    },
    {
      src: Pic18,
      title: "Meridian cake with chocolate",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$12.20",
      type: "deserts",
    },
    {
      src: Pic19,
      title: "Sparkling with orange",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$11.60",
      type: "drinks",
    },
    {
      src: Pic20,
      title: "Coca Cola",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$6.00",
      type: "drinks",
    },
    {
      src: Pic21,
      title: "Orange juice",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$8.00",
      type: "drinks",
    },
    {
      src: Pic22,
      title: "Ribbons with white sauce",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$19.00",
      type: "pasts",
    },
    {
      src: Pic23,
      title: "Ribbons with red sauce",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$21.20",
      type: "pasts",
    },
    {
      src: Pic24,
      title: "Sourdough pizza",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$16.30",
      type: "pizzas",
    },
    {
      src: Pic25,
      title: "Double sauce flaming burger",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing, elit.",
      price: "$15.70",
      type: "burgers",
    },
  ];

  const [productType, setProductType] = useState("all");

  return (
    <Box>
      <Box2>
        <I src={Icon} alt="icon" />
        <Title>Our Menu</Title>
      </Box2>
      <Box3>
        <BoxBtn>
          <Btn type="button" onClick={() => setProductType("all")}>
            ALL
          </Btn>
        </BoxBtn>
        <BoxBtn>
          <Btn type="button" onClick={() => setProductType("burgers")}>
            BURGERS
          </Btn>
        </BoxBtn>
        <BoxBtn>
          <Btn type="button" onClick={() => setProductType("pizzas")}>
            PIZZAS
          </Btn>
        </BoxBtn>
        <BoxBtn>
          <Btn type="button" onClick={() => setProductType("steaks")}>
            STEAKS
          </Btn>
        </BoxBtn>
        <BoxBtn>
          <Btn type="button" onClick={() => setProductType("pasts")}>
            PASTS
          </Btn>
        </BoxBtn>
        <BoxBtn>
          <Btn type="button" onClick={() => setProductType("salads")}>
            SALADS
          </Btn>
        </BoxBtn>
        <BoxBtn>
          <Btn type="button" onClick={() => setProductType("deserts")}>
            DESERTS
          </Btn>
        </BoxBtn>
        <BoxBtn>
          <Btn type="button" onClick={() => setProductType("drinks")}>
            DRINKS
          </Btn>
        </BoxBtn>
      </Box3>
      <Box4>
        {images
          .filter(
            (image) => productType === "all" || image.type === productType
          )
          .map((image, index) => (
            <BoxImg key={index}>
              <Img src={image.src} alt="" />
              <TitleImg>{image.title}</TitleImg>
              <Text>{image.description}</Text>
              <Price>{image.price}</Price>
            </BoxImg>
          ))}
      </Box4>
    </Box>
  );
};

export default FoodMenu;
