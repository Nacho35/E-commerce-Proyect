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

const ProductItem = ({ data, addToCart }) => {
	let { id, src, title, description, price } = data;
	return (
		<Box4>
			<BoxImg>
				<Img src={src} alt="food" />
				<TitleImg>{title}</TitleImg>
				<Text>{description}</Text>
				<Btn2 type="button" onClick={() => addToCart(id)}>
					To Order
				</Btn2>
				<Price>{price}</Price>
			</BoxImg>
		</Box4>
	);
};

export default ProductItem;
