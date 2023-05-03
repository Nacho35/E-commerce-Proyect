import React, { useContext } from "react";
import {
	Box4,
	BoxImg,
	Btn2,
	Img,
	Price,
	Text,
	TitleImg,
} from "../styles/styledFoodMenu";
import CartContext from "./CartContext";

const ProductItem = (product) => {
	const { addToCart, deleteFromCart } = useContext(CartContext);

	return (
		<Box4>
			<BoxImg>
				<Img {...[product.src]} alt="food" />
				<TitleImg>{product.title}</TitleImg>
				<Text>{product.description}</Text>
				<Btn2 type="button" onClick={addToCart}>
					To Order
				</Btn2>
				<Btn2 type="button" onClick={deleteFromCart}>
					Delete
				</Btn2>
				<Price>{product.price}</Price>
			</BoxImg>
		</Box4>
	);
};

export default ProductItem;
