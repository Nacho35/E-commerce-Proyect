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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              molestias numquam eum laudantium recusandae, doloribus deserunt
              minus nemo. Harum, nulla labore? Nesciunt obcaecati placeat
              asperiores vitae atque. Illo, sapiente libero.
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
