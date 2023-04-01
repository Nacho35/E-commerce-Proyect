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

const ProductItem = ({ data, addToCart, deleteFromCart }) => {
	let { id, src, title, description, price } = data;
	const handleAddToCart = () => {
		addToCart(data);
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
				<Btn2 type="button" onClick={() => deleteFromCart(id)}>
					Delete
				</Btn2>
				<Price>{price}</Price>
			</BoxImg>
		</Box4>
	);
};

export default ProductItem;
