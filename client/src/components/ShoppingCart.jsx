import React, { useContext, useState } from "react";
import {
	CartContainer,
	Btn,
	CartButton,
	Icons,
	List,
	Subtitle,
	Title,
	Price,
	EmptyCart,
} from "../styles/styledShoppingCart";
import CartS from "../assets/cart.svg";
import Cross from "../assets/cross2.svg";
import ProductItem from "./ProductItem";
import { CartContext } from "./CartContext";

const ShoppingCart = () => {
	const {
		cart,
		addToCart,
		deleteFromCart,
		clearCart,
		calculateTotalPriceOfCart,
	} = useContext(CartContext);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<CartButton type="button" onClick={() => setIsOpen(!isOpen)}>
			{!isOpen ? (
				<Icons src={CartS} alt="cart icon" />
			) : (
				<Icons src={Cross} alt="cross icon" />
			)}
			<CartContainer
				style={{
					display: isOpen ? "block" : "none",
				}}>
				<Title>My Cart</Title>
				{cart.length === 0 ? (
					<EmptyCart>Ops! Nothing Here</EmptyCart>
				) : (
					<>
						<List>
							{cart.map((product, index) => (
								<ProductItem
									key={index}
									product={product}
									addToCart={addToCart}
									deleteFromCart={deleteFromCart}
								/>
							))}
						</List>
						<hr />
						<Subtitle>
							Total Price:
							<Price>${calculateTotalPriceOfCart().toFixed(2)}</Price>
						</Subtitle>
						<Btn onClick={() => clearCart()}>Clear cart</Btn>
					</>
				)}
			</CartContainer>
		</CartButton>
	);
};

export default ShoppingCart;
