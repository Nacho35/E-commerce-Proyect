import React, { createContext, useReducer, useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { cartReducer, initialState } from "../reducer/shoppingReducer";
import CALCULATE_TOTAL_PRICE_OF_THE_CART from "../actions/shoppingAction";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:3001/cart").then((response) => {
			setCartItems(response.data);
		});
	}, []);

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
				setCartItems(cartItems.filter((item) => item.id !== id));
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const clearCart = () => {
		axios
			.delete("http://localhost:3001/cart")
			.then((response) => {
				setCartItems([]);
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

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const calculateTotalPriceOfCart = () => {
		const totalPrice = cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
		updateTotalPriceInJSON(totalPrice);
		return totalPrice;
	};

	const [state, dispatch] = useReducer(cartReducer, initialState);

	useEffect(() => {
		dispatch({
			type: CALCULATE_TOTAL_PRICE_OF_THE_CART,
			payload: calculateTotalPriceOfCart(),
		});
	}, [calculateTotalPriceOfCart, cartItems]);

	const value = {
		cartItems,
		addToCart,
		deleteFromCart,
		clearCart,
		totalPrice: state.totalPrice,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
