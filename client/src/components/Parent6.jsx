import React from "react";
import Footer from "./Footer";
import Form from "./Form";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
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

const Parent6 = () => {
	const [theme, setTheme] = useState(
		() => window.sessionStorage.getItem("theme") || "light"
	);

	useEffect(() => {
		const storedTheme = sessionStorage.getItem("theme");
		if (storedTheme) {
			setTheme(storedTheme);
		}
	}, []);
	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		sessionStorage.setItem("theme", newTheme);
	};
	return (
		<ThemeProvider theme={themes[theme]}>
			<Navbar toggleTheme={toggleTheme} />
			<Form />
			<Footer />
		</ThemeProvider>
	);
};

export default Parent6;
