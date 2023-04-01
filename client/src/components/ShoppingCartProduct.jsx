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

const ShoppingCartProduct = ({ data, deleteFromCart }) => {
	let { id, src, title, description, price } = data;
	return (
		<Box4>
			<BoxImg>
				<Img src={src} alt="food" />
				<TitleImg>{title}</TitleImg>
				<Text>{description}</Text>
				<Btn2 type="button" onClick={() => deleteFromCart(id)}>
					Delete
				</Btn2>
				<Price>{price}</Price>
			</BoxImg>
		</Box4>
	);
};

export default ShoppingCartProduct;
