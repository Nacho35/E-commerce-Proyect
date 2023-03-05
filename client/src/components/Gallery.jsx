import React from "react";
import {
	Box,
	Box2,
	Title,
	Text,
	Icon,
	BoxG,
	Pic,
	TitlePic,
	BoxP,
	BoxT,
	Price,
} from "../styles/styledGallery";
import RestFood from "../assets/food.svg";
import Slider from "react-slick";
import Food1 from "../assets/special-dishes-1.png";
import Food2 from "../assets/special-dishes-2.jpg";
import Food3 from "../assets/special-dishes-3.jpg";
import Food4 from "../assets/special-dishes-4.jpg";
import Food5 from "../assets/special-dishes-5.png";

const Gallery = () => {
	const settings = {
		dots: true,
		lazyLoad: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,
		slidesToShow: 4,
		swipeToSlide: true,
		arrows: false,
		cssEase: "linear",
		customPaging: (i) => (
			<div
				style={{
					width: "21px",
					height: "21px",
					borderRadius: "10px",
					backgroundColor: "#b0bec5",
					display: "inline-block",
					alignItems: "center",
				}}>
				{i + 1}
			</div>
		),
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					swipeToSlide: true,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					swipeToSlide: true,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					swipeToSlide: true,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					swipeToSlide: true,
					fade: true,
				},
			},
			{
				breakpoint: 360,
				settings: {
					slidesToShow: 1,
					swipeToSlide: true,
					fade: true,
				},
			},
		],
	};
	return (
		<Box>
			<Box2>
				<BoxT>
					<Icon src={RestFood} alt="icon" />
					<Title>Our Special Dishes</Title>
				</BoxT>
				<BoxP>
					<Text>
						Welcome to our restaurant! Below are some of our most popular
						dishes. Click through the carousel to see more details about each
						one.
					</Text>
				</BoxP>
			</Box2>
			<Slider {...settings}>
				<BoxG>
					<Pic src={Food1} alt="image1" />
					<TitlePic>BURGER</TitlePic>
					<Text>
						Our classic burger is made with 100% beef, topped with cheddar
						cheese and served on a toasted sesame bun. Comes with a side of
						crispy fries and our special burger sauce.
					</Text>
					<Price>$8.60</Price>
				</BoxG>
				<BoxG>
					<Pic src={Food2} alt="image2" />
					<TitlePic>PASTA</TitlePic>
					<Text>
						Our pasta dish is a customer favorite. Made with al dente penne
						pasta, tossed in a rich tomato sauce with sautéed onions and garlic.
						Topped with fresh basil and grated parmesan cheese.
					</Text>
					<Price>$11.30</Price>
				</BoxG>
				<BoxG>
					<Pic src={Food3} alt="image3" />
					<TitlePic>BEEF BURGER MEAL</TitlePic>
					<Text>
						Our beef burger meal is perfect for those with a big appetite. It
						features two juicy beef patties, topped with crispy bacon and melted
						cheddar cheese. Served with a side of sweet potato fries and a
						refreshing coleslaw salad.
					</Text>
					<Price>$12.99</Price>
				</BoxG>
				<BoxG>
					<Pic src={Food4} alt="image4" />
					<TitlePic>DOUBLE CHEESE PIZZA</TitlePic>
					<Text>
						Our double cheese pizza is a cheese-lover's dream. Made with a
						crispy thin crust, our homemade tomato sauce, and topped with
						generous amounts of mozzarella and cheddar cheese. Garnished with
						fresh basil leaves.
					</Text>
					<Price>$15.00</Price>
				</BoxG>
				<BoxG>
					<Pic src={Food5} alt="image5" />
					<TitlePic>CEASER SALAD</TitlePic>
					<Text>
						Our Caesar salad is a refreshing and healthy choice. Made with crisp
						Romaine lettuce, topped with shaved parmesan cheese, and our
						homemade Caesar dressing. Served with a side of garlic bread.
					</Text>
					<Price>$10.00</Price>
				</BoxG>
			</Slider>
		</Box>
	);
};

export default Gallery;
