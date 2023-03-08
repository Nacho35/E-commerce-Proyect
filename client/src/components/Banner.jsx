import React from "react";
import { Box, Box2, Btn, SPAN, Title } from "../styles/styledBanner";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
	duration: 3000,
	easing: "ease",
	delay: 100,
	once: false,
	mirror: true,
});

const Banner = () => {
	return (
		<Box>
			<Box2 data-aos="fade-down">
				<Title>
					Double Cheese Pizza <SPAN>30% off friday only</SPAN>
				</Title>
				<Btn type="button" to="/form">
					BOOK A TABLE
				</Btn>
			</Box2>
		</Box>
	);
};

export default Banner;
