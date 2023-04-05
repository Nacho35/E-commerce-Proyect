import React from "react";
import Icon from "../assets/food.svg";
import facebok from "../assets/facebook-f.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import phone from "../assets/phone.svg";
import email from "../assets/email.svg";
import location from "../assets/location.svg";
import {
	Box,
	Box2,
	Box3,
	Box4,
	BoxMap,
	H4,
	I,
	IC,
	InnerBox,
	InnerBox2,
	InsideBox,
	InsideBox2,
	Social,
	Title,
	Reserved,
	Copy,
} from "../styles/styled.Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import MapFooter from "./MapFooter";

AOS.init({
	duration: 3000,
	easing: "ease",
	delay: 100,
	once: false,
	mirror: true,
});

const Footer = () => {
	return (
		<Box>
			<Box2 data-aos="fade-down">
				<I src={Icon} alt="icon" />
				<Title>Contacts</Title>
			</Box2>
			<Box3>
				<Box4 data-aos="fade-right">
					<InnerBox>
						<InsideBox>
							<IC src={location} alt="icon" />
						</InsideBox>
						<InsideBox2>
							<H4>Kansas City, Misuri, EE. UU.</H4>
						</InsideBox2>
					</InnerBox>
					<InnerBox>
						<InsideBox>
							<IC src={phone} alt="icon" />
						</InsideBox>
						<InsideBox2>
							<H4>913 800 478 420</H4>
						</InsideBox2>
					</InnerBox>
					<InnerBox>
						<InsideBox>
							<IC src={email} alt="icon" />
						</InsideBox>
						<InsideBox2>
							<H4>inforest@ymail.com</H4>
						</InsideBox2>
					</InnerBox>
				</Box4>
				<InnerBox2 data-aos="fade-left">
					<a
						href="https://www.facebook.com/"
						target="_blank"
						rel="noopener noreferrer">
						<Social src={facebok} alt="social" />
					</a>
					<a
						href="https://twitter.com/"
						target="_blank"
						rel="noopener noreferrer">
						<Social src={twitter} alt="social" />
					</a>
					<a
						href="https://www.instagram.com/"
						target="_blank"
						rel="noopener noreferrer">
						<Social src={instagram} alt="social" />
					</a>
					<a
						href="https://www.youtube.com/"
						target="_blank"
						rel="noopener noreferrer">
						<Social src={youtube} alt="social" />
					</a>
				</InnerBox2>
			</Box3>
			<BoxMap>
				<MapFooter />
			</BoxMap>
			<Reserved>
				<Copy>
					Copyright © All rights reserved Sargiotti's Restaurant 2023.
				</Copy>
			</Reserved>
		</Box>
	);
};

export default Footer;
