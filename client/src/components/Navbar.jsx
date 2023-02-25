import React, { useEffect, useState } from "react";
import Image from "../assets/food-dinner.svg";
import { useSpring } from "@react-spring/web";
import {
  Nav,
  Box,
  Box1,
  Box2,
  A,
  B,
  SPAN,
  Btn,
  Boxburguer2,
  Boxburguer1,
  AB,
  Cross,
  Bars,
  Logo,
} from "../styles/styledNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWindowResize = () => {
    if (window.innerWidth > 800) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const btnAnimation = useSpring({
    transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
  });

  const menuAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    height: isOpen ? "12%" : "0",
  });

  const boxAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    width: isOpen ? "0px" : "0px",
  });

  return (
    <Nav>
      <Box>
        <Box1 style={{ display: isOpen ? "none" : "flex" }}>
          <Logo src={Image} alt="logo" />
          <B href="">
            SARGIOTTI'S <SPAN>Restaurant</SPAN>
          </B>
        </Box1>
        <Box2 style={{ display: isOpen ? "none" : "flex" }}>
          <A href="">HOME</A>
          <A href="">ABOUT US</A>
          <A href="">CHEFS</A>
          <A href="">MENU</A>
          <A href="">GALLERY</A>
          <A href="">CONTACTS</A>
        </Box2>
      </Box>
      <Boxburguer1>
        <Boxburguer2
          style={(boxAnimation, { display: isOpen ? "block" : "none" })}>
          <AB style={menuAnimation} href="">
            HOME
          </AB>
          <AB style={menuAnimation} href="">
            ABOUT US
          </AB>
          <AB style={menuAnimation} href="">
            CHEFS
          </AB>
          <AB style={menuAnimation} href="">
            MENU
          </AB>
          <AB style={menuAnimation} href="">
            GALLERY
          </AB>
          <AB style={menuAnimation} href="">
            CONTACTS
          </AB>
        </Boxburguer2>
        <Btn
          style={btnAnimation}
          type="button"
          onClick={() => setIsOpen(!isOpen)}>
          {!isOpen ? (
            <Bars
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6H20M4 12H20M4 18H20"
              />
            </Bars>
          ) : (
            <Cross
              fill="none"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M4.293,18.293,10.586,12,4.293,5.707A1,1,0,0,1,5.707,4.293L12,10.586l6.293-6.293a1,1,0,1,1,1.414,1.414L13.414,12l6.293,6.293a1,1,0,1,1-1.414,1.414L12,13.414,5.707,19.707a1,1,0,0,1-1.414-1.414Z"
              />
            </Cross>
          )}
        </Btn>
      </Boxburguer1>
    </Nav>
  );
};

export default Navbar;
