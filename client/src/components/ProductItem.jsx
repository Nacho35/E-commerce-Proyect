import React from "react";
import {
	Box4,
	BoxImg,
	Btn2,
	Img,
	Price,
	Text,
	TitleImg,
} from "../styles/styledFoodMenu";
import { useCart } from "./CartContext";

const ProductItem = ({ product }) => {
	const { id, src, title, description, price } = product;
	const { addToCart, deleteFromCart } = useCart();

	const handleAddToCart = () => {
		addToCart(product);
	};

	const handleDeleteFromCart = () => {
		deleteFromCart(id);
	};

	return (
		<Box4>
			<BoxImg>
				<Img src={src} alt="food" />
				<TitleImg>{title}</TitleImg>
				<Text>{description}</Text>
				<Price>{price}</Price>
				<Btn2 type="button" onClick={() => handleAddToCart(product)}>
					Add More
				</Btn2>
				<Btn2 type="button" onClick={() => handleDeleteFromCart(id)}>
					Delete
				</Btn2>
			</BoxImg>
		</Box4>
	);
};

export default ProductItem;
