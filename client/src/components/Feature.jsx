import React from "react";
import Resto from "../assets/restorant.mp4";
import Food from "../assets/food.svg";
import Chef from "../assets/advantage-1.svg";
import Menu from "../assets/advantage-2.svg";
import FreshFood from "../assets/advantage-3.svg";
import {
  Box,
  Box2,
  Box3,
  Info1,
  Info2,
  Info3,
  Title,
  Text,
  I,
  H3,
  Icon,
  Vid,
  SPAN,
  Boxvideo,
} from "../styles/styledFeature";

const Feature = () => {
  return (
    <Box>
      <Box2>
        <Box3>
          <Info1>
            <I src={Food} alt="food" />
            <Title>Good food for your all day good mood</Title>
          </Info1>
          <Info2>
            <Text>
              Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Itaque
              dolore nisi ipsa neque? Dolorem incidunt fugiat temporibus animi
              nobis, vero expedita voluptate dignissimos officiis quis pariatur
              earum voluptas quia sed. Lorem ipsum, dolor sit amet, consectetur
              adipisicing elit. Itaque dolore nisi ipsa neque? Dolorem incidunt
              fugiat temporibus animi nobis, vero expedita voluptate dignissimos
              officiis quis pariatur earum voluptas quia sed. Lorem ipsum, dolor
              sit amet, consectetur adipisicing elit. Itaque dolore nisi ipsa
              neque? Dolorem incidunt fugiat temporibus animi nobis, vero
              expedita voluptate dignissimos officiis quis pariatur earum
              voluptas quia sed.
            </Text>
          </Info2>
          <Info3>
            <Icon src={Chef} alt="chef" />
            <SPAN>
              <H3>Experienced chefs</H3>
            </SPAN>
            <Icon src={Menu} alt="" />
            <SPAN>
              <H3>Original recipes</H3>
            </SPAN>
            <Icon src={FreshFood} alt="" />
            <SPAN>
              <H3>Fresh ingredients</H3>
            </SPAN>
          </Info3>
          <Boxvideo>
            <Vid
              width="100%"
              height="auto"
              controls
              loop
              muted
              src={Resto}></Vid>
          </Boxvideo>
        </Box3>
      </Box2>
    </Box>
  );
};

export default Feature;
