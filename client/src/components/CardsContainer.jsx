import React from "react";
import {
	Box,
	Box2,
	Box3,
	Card,
	Icon,
	Image,
	Text,
	Title,
	H3,
	H4,
	Icons,
} from "../styles/styedCards";
import chef1 from "../assets/chef-1.jpg";
import chef2 from "../assets/chef-2.jpg";
import chef3 from "../assets/chef-3.jpg";
import chef4 from "../assets/chef-4.jpg";
import RestFood from "../assets/food.svg";
import Facebook from "../assets/facebook-f.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
	duration: 3000,
	easing: "ease",
	delay: 100,
	once: true,
	mirror: true,
});

const Cards = [
	{
		image: `${chef1}`,
		alt: "chef",
		title: "Richard Nauz",
		subtitle: "food chef",
		links: [
			{ url: "https://www.facebook.com/", icon: `${Facebook}` },
			{ url: "https://www.instagram.com/", icon: `${Instagram}` },
			{ url: "https://twitter.com/", icon: `${Twitter}` },
		],
	},
	{
		image: `${chef2}`,
		alt: "chef",
		title: "Olivia Grosh",
		subtitle: "food chef",
		links: [
			{ url: "https://www.facebook.com/", icon: `${Facebook}` },
			{ url: "https://www.instagram.com/", icon: `${Instagram}` },
			{ url: "https://twitter.com/", icon: `${Twitter}` },
		],
	},
	{
		image: `${chef3}`,
		alt: "chef",
		title: "Jeremy White",
		subtitle: "food chef",
		links: [
			{ url: "https://www.facebook.com/", icon: `${Facebook}` },
			{ url: "https://www.instagram.com/", icon: `${Instagram}` },
			{ url: "https://twitter.com/", icon: `${Twitter}` },
		],
	},
	{
		image: `${chef4}`,
		alt: "chef",
		title: "Howard Holmes",
		subtitle: "food chef",
		links: [
			{ url: "https://www.facebook.com/", icon: `${Facebook}` },
			{ url: "https://www.instagram.com/", icon: `${Instagram}` },
			{ url: "https://twitter.com/", icon: `${Twitter}` },
		],
	},
];
const CardsContainer = () => {
	return (
		<Box>
			<Box2 data-aos="fade-up">
				<Box3>
					<Icon src={RestFood} alt="icon" />
					<Title>Our best chef</Title>
				</Box3>
				<Text>
					Our restaurant is proud to feature some of the most talented and
					creative chefs in the industry. Each one of our chefs brings their
					unique style and culinary expertise to the table, ensuring that every
					dish is not only delicious, but also beautifully presented. From the
					selection of ingredients to the final plating, our chefs put their
					heart and soul into every dish they create. We believe that the art of
					cooking is not just about preparing food, but also about creating an
					experience for our guests that they will never forget. Come taste the
					creations of our best chefs and experience the culinary journey of a
					lifetime.
				</Text>
			</Box2>
			{Cards.map((card, index) => {
				const { image, alt, title, subtitle, links } = card;

				return (
					<Card data-aos="flip-left" key={index}>
						<Image src={image} alt={alt} />
						<figcaption>
							<H3>{title}</H3>
							<H4>{subtitle}</H4>
							{links.map((link, linkIndex) => (
								<a
									href={link}
									target="_blank"
									rel="noopener noreferrer"
									key={linkIndex}>
									<Icons
										src={link.icon}
										alt={`Social link ${linkIndex + 1}`}
										key={linkIndex}
									/>
								</a>
							))}
						</figcaption>
					</Card>
				);
			})}
		</Box>
	);
};

export default CardsContainer;
