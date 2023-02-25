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
      description: "Delicious pizza with double cheese melted on top",
      price: "$15.30",
      type: "pizzas",
    },
    {
      src: Pic2,
      title: "Seafood",
      description:
        "A delightful mix of seafood including shrimp, calamari, and mussels",
      price: "$23.99",
      type: "all",
    },
    {
      src: Pic3,
      title: "Double mac burger",
      description:
        "Two juicy beef patties served with lettuce, tomato, onion, and our signature special sauce",
      price: "$13.80",
      type: "burgers",
    },
    {
      src: Pic4,
      title: "Pasta",
      description:
        "A mouth-watering dish of al dente pasta with your choice of sauce and topped with parmesan cheese",
      price: "$16.99",
      type: "pasts",
    },
    {
      src: Pic5,
      title: "Beef cheese burger",
      description:
        "A classic burger with a juicy beef patty and melted cheese on top",
      price: "$11.50",
      type: "burgers",
    },
    {
      src: Pic6,
      title: "Double Cheese Pizza",
      description: "Delicious pizza with double cheese melted on top",
      price: "$15.30",
      type: "pizzas",
    },
    {
      src: Pic7,
      title: "Lemonade",
      description: "Freshly squeezed lemonade with a hint of sweetness",
      price: "$5.00",
      type: "drinks",
    },
    {
      src: Pic8,
      title: "Chicken burger",
      description:
        "Grilled chicken breast served with lettuce, tomato, onion, and our signature special sauce",
      price: "$14.35",
      type: "burgers",
    },
    {
      src: Pic9,
      title: "Grill Meat",
      description: "A juicy and tender cut of steak grilled to perfection",
      price: "$16.00",
      type: "steaks",
    },
    {
      src: Pic10,
      title: "Specialty of the house",
      description:
        "Our chef's special dish, a succulent steak with a side of garlic mashed potatoes",
      price: "$25.00",
      type: "steaks",
    },
    {
      src: Pic11,
      title: "Chicken legs",
      description: "Two juicy chicken legs served with your choice of sauce",
      price: "$14.00",
      type: "steaks",
    },
    {
      src: Pic12,
      title: "Loin meat with vegetables",
      description: "Tender loin meat served with grilled vegetables",
      price: "$20.00",
      type: "steaks",
    },
    {
      src: Pic13,
      title: "Roman salad",
      description:
        "A crisp and refreshing salad with romaine lettuce, croutons, and parmesan cheese",
      price: "$12.40",
      type: "salads",
    },
    {
      src: Pic14,
      title: "Thousands of salads to suit you",
      description:
        "Customize your own salad with our wide variety of fresh ingredients",
      price: "$13.50",
      type: "salads",
    },
    {
      src: Pic15,
      title: "Vegetable casserole",
      description:
        "A hearty and healthy dish of baked vegetables topped with melted cheese",
      price: "$11.10",
      type: "salads",
    },
    {
      src: Pic16,
      title: "Brownies",
      description:
        "These delicious brownies are made with high-quality cocoa powder and a secret ingredient that gives them an extra fudgy texture. They're perfect for chocolate lovers!",
      price: "$10.00",
      type: "deserts",
    },
    {
      src: Pic17,
      title: "Strawberry cake",
      description:
        "Our moist and fluffy strawberry cake is made with fresh strawberries and topped with a light and creamy frosting. It's a perfect dessert for any occasion",
      price: "$8.50",
      type: "deserts",
    },
    {
      src: Pic18,
      title: "Meridian cake with chocolate",
      description:
        "Our Meridian Cake is a rich and decadent dessert made with layers of chocolate cake and creamy chocolate ganache. It's topped with a generous layer of chocolate shavings",
      price: "$12.20",
      type: "deserts",
    },
    {
      src: Pic19,
      title: "Sparkling with orange",
      description:
        "This refreshing drink is made with freshly squeezed orange juice and sparkling water. It's the perfect beverage for a hot summer day!",
      price: "$11.60",
      type: "drinks",
    },
    {
      src: Pic20,
      title: "Coca Cola",
      description:
        "Enjoy the classic taste of Coca Cola, a refreshing and carbonated soft drink loved by millions around the world",
      price: "$6.00",
      type: "drinks",
    },
    {
      src: Pic21,
      title: "Orange juice",
      description:
        "Start your day off right with a glass of freshly squeezed orange juice. Our juice is made with the freshest oranges and has a sweet and tangy flavor",
      price: "$8.00",
      type: "drinks",
    },
    {
      src: Pic22,
      title: "Ribbons with white sauce",
      description:
        "Our Ribbons with White Sauce is a classic Italian dish made with al dente ribbons of pasta smothered in a rich and creamy white sauce. It's comfort food at its finest!",
      price: "$19.00",
      type: "pasts",
    },
    {
      src: Pic23,
      title: "Ribbons with red sauce",
      description:
        "Our Ribbons with Red Sauce is another classic Italian dish made with al dente ribbons of pasta topped with a flavorful and hearty tomato-based sauce",
      price: "$21.20",
      type: "pasts",
    },
    {
      src: Pic24,
      title: "Sourdough pizza",
      description:
        "Our Sourdough Pizza is made with a homemade sourdough crust and topped with fresh and flavorful ingredients. It's the perfect meal for a cozy night in",
      price: "$16.30",
      type: "pizzas",
    },
    {
      src: Pic25,
      title: "Double sauce flaming burger",
      description:
        "Our Double Sauce Flaming Burger is not for the faint of heart! It's a juicy beef patty topped with two types of sauce - a spicy chili sauce and a tangy BBQ sauce - and served with a side of crispy fries",
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
