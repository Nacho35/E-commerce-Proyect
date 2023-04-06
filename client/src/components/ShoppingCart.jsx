import React, { useState, useReducer } from "react";
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
import { cartReducer, initialState } from "../reducer/shoppingReducer";
import ProductItem from "./ProductItem";
import TYPES from "../actions/shoppingAction";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const ShoppingCart = () => {
	const [state, dispatch] = useReducer(cartReducer, initialState);
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (productId) => {
		const itemExists = cartItems.find((item) => item.productId === productId);

		if (itemExists) {
			setCartItems(
				cartItems.map((item) =>
					item.productId === productId
						? {
								...item,
								quantity: item.quantity + 1,
						  }
						: item
				)
			);
		} else {
			axios
				.get(`http://localhost:3001/products/${productId}`)
				.then((response) => {
					const product = {
						id: uuidv4(),
						src: response.product.src,
						title: response.product.title,
						price: response.product.price,
						quantity: 1,
					};
					const newItem = {
						productId: productId,
						...product,
					};
					axios.post("http://localhost:3001/cart", product).then(() => {
						setCartItems([...cartItems, newItem]);
					});
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};

	const deleteFromCart = (id) => {
		axios
			.delete(`http://localhost:3001/cart/${id}`)
			.then((response) => {
				dispatch({
					type: TYPES.DELETE_PRODUCT_FROM_CART,
					payload: id,
				});
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const clearCart = () => {
		axios
			.delete("http://localhost:3001/cart")
			.then((response) => {
				dispatch({
					type: TYPES.DELETE_ALL_FROM_CART,
				});
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const updateTotalPriceInJSON = (totalPrice) => {
		axios
			.put("http://localhost:3001/totalPrice", {
				value: totalPrice,
			})
			.then((response) => {})
			.catch((error) => {
				console.error(error);
			});
	};

	const calculateTotalPriceOfCart = () => {
		axios.get("http://localhost:3001/cart").then((response) => {
			const totalPrice = cartItems.reduce(
				(total, item) => total + item.price * item.quantity,
				0
			);
			updateTotalPriceInJSON({
				totalPrice,
			});
			return dispatch({ type: "SET_TOTAL_PRICE", payload: totalPrice });
		});
		try {
			const totalPrice = cartItems.reduce(
				(total, item) => total + item.price * item.quantity,
				0
			);
			dispatch({ type: "SET_TOTAL_PRICE", payload: totalPrice });
		} catch (error) {
			console.log(error);
			return error;
		}
	};

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
				{state.cart.length === 0 ? (
					<EmptyCart>Ops! Nothing Here</EmptyCart>
				) : (
					<>
						<List>
							{state.cart.map((product) => (
								<ProductItem
									key={product.id}
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
