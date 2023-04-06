import React from "react";
import Resto from "../assets/restorant.jpg";
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
	SPAN,
	Boximage,
	Image,
} from "../styles/styledFeature";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
	duration: 3000,
	easing: "ease",
	delay: 100,
	once: false,
	mirror: true,
});

const Feature = () => {
	return (
		<Box>
			<Box2>
				<Box3>
					<Info1 data-aos="fade-up">
						<I src={Food} alt="food" />
						<Title>Good food for your all day good mood</Title>
					</Info1>
					<Info2 data-aos="fade-up">
						<Text>
							At our restaurant, we pride ourselves on offering a unique dining
							experience that combines exceptional food with a warm and
							welcoming atmosphere. From the moment you step through our doors,
							you will be greeted by friendly staff who are committed to
							providing you with the highest level of service. Our menu is
							carefully crafted to showcase the freshest ingredients and bold
							flavors, with a range of dishes to suit all tastes and dietary
							requirements. Whether you are looking for classic comfort food or
							something more adventurous, our talented chefs are always
							experimenting with new and exciting flavor combinations. We also
							offer an extensive selection of wines, beers, and cocktails to
							complement your meal, along with a range of non-alcoholic options.
							And with our cozy ambiance and stylish decor, our restaurant is
							the perfect place to relax and enjoy a memorable dining experience
							with friends and family. So come and join us for a meal today and
							discover why we are one of the most popular restaurants in the
							area!
						</Text>
					</Info2>
					<Info3 data-aos="fade-up">
						<Icon data-aos="flip-left" src={Chef} alt="chef" />
						<SPAN>
							<H3>Experienced chefs</H3>
						</SPAN>
						<Icon data-aos="flip-left" src={Menu} alt="menu" />
						<SPAN>
							<H3>Original recipes</H3>
						</SPAN>
						<Icon data-aos="flip-left" src={FreshFood} alt="freshfood" />
						<SPAN>
							<H3>Fresh ingredients</H3>
						</SPAN>
					</Info3>
					<Boximage>
						<Image data-aos="flip-up" src={Resto} alt="restorant" />
					</Boximage>
				</Box3>
			</Box2>
		</Box>
	);
};

export default Feature;
