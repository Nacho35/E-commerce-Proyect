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
	H3,
	H4,
	I,
	IC,
	InnerBox,
	InnerBox2,
	InsideBox,
	InsideBox2,
	Social,
	Title,
	Map,
	Reserved,
	Copy,
} from "../styles/styled.Footer";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
	duration: 3000,
	easing: "ease",
	delay: 100,
	once: true,
	mirror: true,
});

const Footer = () => {
	return (
		<Box>
			<Box2 data-aos="fade-up">
				<I src={Icon} alt="icon" />
				<Title>Contacts</Title>
			</Box2>
			<Box3>
				<Box4 data-aos="fade-down">
					<InnerBox>
						<InsideBox>
							<IC src={location} alt="icon" />
							<H3>Location</H3>
						</InsideBox>
						<InsideBox2>
							<H4>Brooklyn Ave, Kansas City, Misuri, EE. UU.</H4>
						</InsideBox2>
					</InnerBox>
					<InnerBox>
						<InsideBox>
							<IC src={phone} alt="icon" />
							<H3>Phone</H3>
						</InsideBox>
						<InsideBox2>
							<H4>913 800 478 420</H4>
						</InsideBox2>
					</InnerBox>
					<InnerBox>
						<InsideBox>
							<IC src={email} alt="icon" />
							<H3>Email</H3>
						</InsideBox>
						<InsideBox2>
							<H4>inforest@sargiottis.com</H4>
						</InsideBox2>
					</InnerBox>
				</Box4>
				<InnerBox2 data-aos="fade-down">
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
				<Map
					data-aos="zoom-in"
					src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d10417.605268696248!2d-94.55576890907439!3d39.079775366589345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurantes!5e0!3m2!1ses-419!2sar!4v1677021409261!5m2!1ses-419!2sar"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"></Map>
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
