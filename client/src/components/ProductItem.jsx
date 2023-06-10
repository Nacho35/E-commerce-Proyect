import React, { useState } from "react";
import {
	BoxImg,
	Btn2,
	Img,
	Price,
	Text,
	TitleImg,
} from "../styles/styledFoodMenu";
import AOS from "aos";
import "aos/dist/aos.css";
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

AOS.init({
	duration: 3000,
	easing: "ease",
	delay: 100,
	once: true,
});

const ProductItem = ({
	product,
	showAddToCartButton,
	showButtons,
	showDeleteButton,
	setIsCartOpen,
}) => {
	const { id, src, title, description, price } = product;
	const { addToCart, deleteFromCart, cart, setCart } = useCart();
	const [quantity, setQuantity] = useState(1);

	const updateQuantity = (productId, newQuantity) => {
		const newCart = cart.map((item) => {
			if (item.id === productId) {
				return { ...item, quantity: newQuantity };
			}
			return item;
		});
		setCart(newCart);
		setQuantity(newQuantity);
	};

	const incrementQuantity = (e) => {
		e.stopPropagation();
		const newQuantity = quantity + 1;
		updateQuantity(id, newQuantity);
	};

	const decrementQuantity = (e) => {
		e.stopPropagation();
		if (quantity > 1) {
			const newQuantity = quantity - 1;
			updateQuantity(id, newQuantity);
		}
	};

	const handleAddToCart = (e) => {
		e.stopPropagation();
		addToCart({ ...product, quantity });
	};

	const handleDeleteFromCart = (e) => {
		e.stopPropagation();
		deleteFromCart(id);
	};

	const handleCartClick = (e) => {
		e.stopPropagation();
	};

	const handleOutsideCartClick = () => {
		setIsCartOpen(false);
	};

	return (
		<div onClick={handleOutsideCartClick}>
			<BoxImg data-aos="flip-left" onClick={handleCartClick}>
				<Img src={images[src]} alt="food" />
				<TitleImg>{title}</TitleImg>
				<Text>{description}</Text>
				<Price>${price.toFixed(2)}</Price>
				{showButtons && (
					<div className="btn-container">
						<span className="button-85" onClick={decrementQuantity}>
							-
						</span>
						<p className="quantity">{quantity}</p>
						<span className="button-85" onClick={incrementQuantity}>
							+
						</span>
					</div>
				)}
				{showAddToCartButton && (
					<Btn2 type="button" onClick={handleAddToCart}>
						Add Cart
					</Btn2>
				)}
				{showDeleteButton && <Btn2 onClick={handleDeleteFromCart}>Delete</Btn2>}
			</BoxImg>
		</div>
	);
};

export default ProductItem;
