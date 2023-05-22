import React from "react";
import Icon from "../assets/food.svg";
import { useState, useEffect } from "react";
import {
	Box,
	Box2,
	Box3,
	Box4,
	BoxBtn,
	BoxImg,
	Btn,
	Btn2,
	I,
	Img,
	Price,
	Text,
	Title,
	TitleImg,
} from "../styles/styledFoodMenu";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import ProductItem from "./ProductItem";
import { useCart } from "./CartContext";

const pic1 = require("../assets/product-1.jpg");
const pic2 = require("../assets/product-2.jpg");
const pic3 = require("../assets/product-3.jpg");
const pic4 = require("../assets/product-4.jpg");
const pic5 = require("../assets/product-5.jpg");
const pic6 = require("../assets/product-6.jpg");
const pic7 = require("../assets/product-7.jpg");
const pic8 = require("../assets/product-8.jpg");
const pic9 = require("../assets/product-9.jpg");
const pic10 = require("../assets/product-10.jpg");
const pic11 = require("../assets/product-11.jpg");
const pic12 = require("../assets/product-12.jpg");
const pic13 = require("../assets/product-13.jpg");
const pic14 = require("../assets/product-14.jpg");
const pic15 = require("../assets/product-15.jpg");
const pic16 = require("../assets/product-16.jpg");
const pic17 = require("../assets/product-17.jpg");
const pic18 = require("../assets/product-18.jpg");
const pic19 = require("../assets/product-19.jpg");
const pic20 = require("../assets/product-20.jpg");
const pic21 = require("../assets/product-21.jpg");
const pic22 = require("../assets/product-22.jpg");
const pic23 = require("../assets/product-23.jpg");
const pic24 = require("../assets/product-24.jpg");
const pic25 = require("../assets/product-25.jpg");

AOS.init({
	duration: 3000,
	easing: "ease",
	delay: 100,
	once: true,
});

const images = {
	pic1,
	pic2,
	pic3,
	pic4,
	pic5,
	pic6,
	pic7,
	pic8,
	pic9,
	pic10,
	pic11,
	pic12,
	pic13,
	pic14,
	pic15,
	pic16,
	pic17,
	pic18,
	pic19,
	pic20,
	pic21,
	pic22,
	pic23,
	pic24,
	pic25,
};

const db = require("../api/db.json");

const FoodMenu = () => {
	const [products, setProducts] = useState([ProductItem]);
	const { addToCart } = useCart();

	useEffect(() => {
		axios
			.get("http://localhost:3001/products")
			.then((response) => {
				setProducts(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const filterProducts = (type) => {
		if (type === "all") {
			setProducts(db.products);
		} else {
			setProducts(db.products.filter((product) => product.type === type));
		}
	};

	useEffect(() => {
		filterProducts("all");
	}, []);

	const handleAddToCart = (product) => {
		addToCart(product);
		console.log(addToCart());
	};

	return (
		<Box>
			<Box2 data-aos="fade-up">
				<I src={Icon} alt="icon" />
				<Title>Our Menu</Title>
			</Box2>
			<Box3 data-aos="fade-up">
				<BoxBtn>
					<Btn onClick={() => filterProducts("all")}>All</Btn>
				</BoxBtn>
				<BoxBtn>
					<Btn onClick={() => filterProducts("pizzas")}>Pizzas</Btn>
				</BoxBtn>
				<BoxBtn>
					<Btn onClick={() => filterProducts("burgers")}>Burgers</Btn>
				</BoxBtn>
				<BoxBtn>
					<Btn onClick={() => filterProducts("pasts")}>Pasta</Btn>
				</BoxBtn>
				<BoxBtn>
					<Btn onClick={() => filterProducts("drinks")}>Drinks</Btn>
				</BoxBtn>
				<BoxBtn>
					<Btn onClick={() => filterProducts("steaks")}>Steaks</Btn>
				</BoxBtn>
				<BoxBtn>
					<Btn onClick={() => filterProducts("deserts")}>Deserts</Btn>
				</BoxBtn>
				<BoxBtn>
					<Btn onClick={() => filterProducts("salads")}>Salads</Btn>
				</BoxBtn>
			</Box3>
			<Box4>
				{products.map((product, id) => (
					<BoxImg data-aos="flip-left" key={id}>
						<Img src={images[product.src]} alt={product.title} />
						<TitleImg>{product.title}</TitleImg>
						<Text>{product.description}</Text>
						<Price>${product.price}</Price>
						<Btn2 type="button" onClick={() => handleAddToCart(product)}>
							Add Cart
						</Btn2>
					</BoxImg>
				))}
			</Box4>
		</Box>
	);
};

export default FoodMenu;
