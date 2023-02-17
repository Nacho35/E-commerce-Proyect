import React from "react";
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
import Icon from "../assets/food.svg";
import Pic1 from "../assets/product-1.jpg";
import Pic2 from "../assets/product-2.jpg";
import Pic3 from "../assets/product-3.png";
import Pic4 from "../assets/product-4.jpg";
import Pic5 from "../assets/product-5.jpg";
import Pic6 from "../assets/product-6.jpg";
import Pic7 from "../assets/product-7.jpg";
import Pic8 from "../assets/product-8.jpg";

const FoodMenu = () => {
  return (
    <Box>
      <Box2>
        <I src={Icon} alt="icon" />
        <Title>Our Menu</Title>
      </Box2>
      <Box3>
        <BoxBtn>
          <Btn href="">ALL</Btn>
        </BoxBtn>
        <BoxBtn>
          <Btn href="">BURGERS</Btn>
        </BoxBtn>
        <BoxBtn>
          <Btn href="">PIZZAS</Btn>
        </BoxBtn>
        <BoxBtn>
          <Btn href="">STEAKS</Btn>
        </BoxBtn>
        <BoxBtn>
          <Btn href="">PASTS</Btn>
        </BoxBtn>
        <BoxBtn>
          <Btn href="">SALADS</Btn>
        </BoxBtn>
        <BoxBtn>
          <Btn href="">DESERTS</Btn>
        </BoxBtn>
        <BoxBtn>
          <Btn href="">DRINKS</Btn>
        </BoxBtn>
      </Box3>
      <Box4>
        <BoxImg>
          <Img src={Pic1} alt="" />
          <TitleImg>Grand italiano pizza</TitleImg>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
          </Text>
          <Price>$15.30</Price>
        </BoxImg>
        <BoxImg>
          <Img src={Pic2} alt="" />
          <TitleImg>Seafood</TitleImg>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
          </Text>
          <Price>$23.99</Price>
        </BoxImg>
        <BoxImg>
          <Img src={Pic3} alt="" />
          <TitleImg>Double mac burger</TitleImg>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
          </Text>
          <Price>$13.80</Price>
        </BoxImg>
        <BoxImg>
          <Img src={Pic4} alt="" />
          <TitleImg>Pasta</TitleImg>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
          </Text>
          <Price>$16.99</Price>
        </BoxImg>
        <BoxImg>
          <Img src={Pic5} alt="" />
          <TitleImg>Beef cheese burger</TitleImg>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
          </Text>
          <Price>$11.50</Price>
        </BoxImg>
        <BoxImg>
          <Img src={Pic6} alt="" />
          <TitleImg>Double Cheese Pizza</TitleImg>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
          </Text>
          <Price>$21.30</Price>
        </BoxImg>
        <BoxImg>
          <Img src={Pic7} alt="" />
          <TitleImg>Lemonade</TitleImg>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
          </Text>
          <Price>$5.00</Price>
        </BoxImg>
        <BoxImg>
          <Img src={Pic8} alt="" />
          <TitleImg>Chicken burger</TitleImg>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
          </Text>
          <Price>$14.35</Price>
        </BoxImg>
      </Box4>
    </Box>
  );
};

export default FoodMenu;
