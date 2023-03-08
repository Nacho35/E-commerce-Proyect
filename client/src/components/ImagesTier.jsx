import React from "react";
import Icon from "../assets/food.svg";
import G1 from "../assets/gallery-1.jpg";
import G2 from "../assets/gallery-2.jpg";
import G3 from "../assets/gallery-3.jpg";
import G4 from "../assets/gallery-4.jpg";
import G5 from "../assets/gallery-5.jpg";
import G6 from "../assets/gallery-6.jpg";
import { Box, Box2, Box3, I, Image, Title } from "../styles/styled.ImagesTier";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
	duration: 3000,
	easing: "ease",
	delay: 100,
	once: true,
	mirror: true,
});

const ImagesTier = () => {
	return (
		<Box>
			<Box2 data-aos="fade-up">
				<I src={Icon} alt="icon" />
				<Title>Gallery</Title>
			</Box2>
			<Box3>
				<Image data-aos="flip-right" src={G1} alt="picture" />

				<Image data-aos="flip-right" src={G2} alt="picture" />

				<Image data-aos="flip-right" src={G3} alt="picture" />

				<Image data-aos="flip-right" src={G4} alt="picture" />

				<Image data-aos="flip-right" src={G5} alt="picture" />

				<Image data-aos="flip-right" src={G6} alt="picture" />
			</Box3>
		</Box>
	);
};

export default ImagesTier;
