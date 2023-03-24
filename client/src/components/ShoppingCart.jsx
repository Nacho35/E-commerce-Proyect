import React, { useState, useReducer } from "react";
import { useSpring } from "@react-spring/web";
import {
	Box,
	Box2,
	Btn,
	CartButton,
	Icons,
	Innerbox,
	List,
	Subtitle,
	Title,
	Boxbtn,
} from "../styles/styledShoppingCart";
import CartS from "../assets/cart.svg";
import Cross from "../assets/cross2.svg";
import { reducerCart, productsInitialState } from "../reducer/shoppingReducer";
import ProductItem from "../components/ProductItem";
import TYPES from "../actions/shoppingAction";
import ShoppingCartProduct from "./ShoppingCartProduct";

const ShoppingCart = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [state, dispatch] = useReducer(reducerCart, productsInitialState);

	const addToCart = (id) => {
		dispatch({
			type: TYPES.ADD_TO_CART,
			payload: id,
		});
	};

	const deleteFromCart = (id) => {
		dispatch({
			type: TYPES.DELETE_PRODUCT_FROM_CART,
			payload: id,
		});
	};

	const clearCart = () => {
		dispatch({
			type: TYPES.DELETE_ALL_FROM_CART,
		});
	};

	const calculateTotalPriceOfCart = () => {
		dispatch({ type: TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART });
	};

	const btnAnimation = useSpring({
		transform: isOpen ? "translateY(-10px)" : "translateY(0px)",
		config: {
			tension: 300,
			friction: 10,
		},
	});

	const menuAnimation = useSpring({
		opacity: isOpen ? 1 : 0,
		height: isOpen ? "100%" : "0%",
	});

	const boxAnimation = useSpring({
		opacity: isOpen ? 1 : 0,
		width: isOpen ? "100%" : "0%",
	});

	return (
		<Box>
			<Box2 style={(boxAnimation, { display: isOpen ? "block" : "none" })}>
				<Innerbox>
					<Title style={menuAnimation}>My Cart</Title>
					<List>
						{state.products.map((product) => {
							return (
								<ProductItem
									key={product.id}
									data={product}
									addToCart={addToCart}
								/>
							);
						})}
					</List>
					<hr />
					<Subtitle style={menuAnimation}>
						<Btn onClick={() => calculateTotalPriceOfCart()}>Total Price</Btn>
						{state.totalPriceShoppingCart > 0 && (
							<p className="totalPrice_shoppingCart">
								Total Price: {state.totalPriceShoppingCart}
							</p>
						)}
					</Subtitle>
					<Boxbtn>
						<Btn onClick={() => clearCart()} style={menuAnimation}>
							Clear cart
						</Btn>
					</Boxbtn>
					{state.cart.length === 0 && <p>There are no products in the cart</p>}
				</Innerbox>
				{state.cart.map((productCart) => {
					return (
						<ShoppingCartProduct
							key={productCart.id + Math.random() * 50}
							data={productCart}
							deleteFromCart={deleteFromCart}
						/>
					);
				})}
			</Box2>
			<CartButton
				style={btnAnimation}
				type="button"
				onClick={() => setIsOpen(!isOpen)}>
				{!isOpen ? (
					<Icons src={CartS} alt="cart icon" />
				) : (
					<Icons src={Cross} alt="cross icon" />
				)}
			</CartButton>
		</Box>
	);
};

export default ShoppingCart;
