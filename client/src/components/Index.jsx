import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Navbar from "./Navbar";
import Home from "./Home";
import Gallery from "./Gallery";
import Feature from "./Feature";
import Banner from "./Banner";
import CardsContainer from "./CardsContainer";
import FoodMenu from "./FoodMenu";
import ImagesTier from "./ImagesTier";
import Form from "./Form";
import Footer from "./Footer";
import BgImageDark from "../assets/bg-pattern.png";
import BgImageLight from "../assets/bg-light.jpg";
import BgImageLight2 from "../assets/bg-light2.png";
import BgDark from "../assets/bg-header.png";
import BgBanner from "../assets/bg-offer.png";
import BgBanner2 from "../assets/bg-offer2.jpg";

const lightTheme = {
	body: "#F0F0F0",
	text: "#222222",
	text2: "#0072BB",
	hover: "#0072BB",
	button: "#0072BB",
	backgroundImage: `url(${BgImageLight2})`,
	backgroundImage2: `url(${BgImageLight2})`,
	backgroundImage3: `url(${BgImageLight})`,
	backgroundBanner: `url(${BgBanner2})`,
};

const darkTheme = {
	body: "#222222",
	text: "#F0F0F0",
	text2: "#ffcc33",
	hover: "#ffcc33",
	button: "#ffcc33",
	backgroundImage: `url(${BgImageDark})`,
	backgroundImage2: `url(${BgImageDark})`,
	backgroundImage3: `url(${BgDark})`,
	backgroundBanner: `url(${BgBanner})`,
};

const themes = {
	light: lightTheme,
	dark: darkTheme,
};
const Index = () => {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};
	return (
		<ThemeProvider theme={themes[theme]}>
			<Navbar toggleTheme={toggleTheme} />
			<Home />
			<Gallery />
			<Feature />
			<Banner />
			<CardsContainer />
			<FoodMenu />
			<ImagesTier />
			<Form />
			<Footer />
		</ThemeProvider>
	);
};

export default Index;
