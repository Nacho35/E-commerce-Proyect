import React from "react";
import Icon from "../assets/food.svg";
import { useState, useEffect } from "react";
import {
	Box,
	Box2,
	Box3,
	Box4,
	BoxBtn,
	Btn,
	I,
	Title,
} from "../styles/styledFoodMenu";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductItem from "./ProductItem";

AOS.init({
	duration: 3000,
	easing: "ease",
	delay: 100,
	once: true,
});

const db = require("../api/db.json");

const FoodMenu = () => {
	const [products, setProducts] = useState([]);

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
					<ProductItem
						key={id}
						product={product}
						showAddToCartButton={true}></ProductItem>
				))}
			</Box4>
		</Box>
	);
};

export default FoodMenu;
