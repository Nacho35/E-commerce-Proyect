import React from "react";
import {
  Box,
  Box2,
  Box3,
  Title,
  Text,
  Btn,
  SPAN,
  BoxP,
} from "../styles/styledHome";

const Home = () => {
  return (
    <Box>
      <Box2>
        <Box3>
          <Title>
            BEST QUALITY <SPAN>FOOD</SPAN>{" "}
          </Title>
          <BoxP>
            <Text>
              Welcome to our restaurant, where the culinary experience is taken
              to a whole new level. Our team of expert chefs prepares delicious
              and artistic dishes that are based on the freshest and highest
              quality ingredients available. We offer a wide variety of menu
              options, from classic dishes to innovative and contemporary
              creations. Whether you're looking for a romantic dinner for two or
              a group gathering, our cozy and elegant atmosphere is perfect for
              any occasion. And don't forget to accompany your meal with a
              selection of fine wines and handcrafted cocktails. Come and visit
              us and taste the best of gastronomy at our restaurant!
            </Text>
          </BoxP>
          <Btn type="button" href="">
            BOOK A TABLE
          </Btn>
        </Box3>
      </Box2>
    </Box>
  );
};

export default Home;
