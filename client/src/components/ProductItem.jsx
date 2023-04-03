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

const ProductItem = ({ product, addToCart, deleteFromCart }) => {
	let { src, title, description, price } = product;

	const handleAddToCart = () => {
		addToCart(product.id);
	};

	const handleDeleteClick = () => {
		deleteFromCart(product.id);
	};

	return (
		<Box4>
			<BoxImg>
				<Img src={src} alt="food" />
				<TitleImg>{title}</TitleImg>
				<Text>{description}</Text>
				<Btn2 type="button" onClick={handleAddToCart}>
					To Order
				</Btn2>
				<Btn2 type="button" onClick={handleDeleteClick}>
					Delete
				</Btn2>
				<Price>{price}</Price>
			</BoxImg>
		</Box4>
	);
};

export default ProductItem;
