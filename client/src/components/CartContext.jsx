import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const CartContext = createContext({
	cartItems: [],
	addToCart: () => {},
	removeFromCart: () => {},
});

const CartContextProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

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

	useEffect(() => {
		const updateCartItems = (newCartItems) => {
			setCartItems(newCartItems);
			const totalPrice = newCartItems.reduce(
				(total, item) => total + item.price * item.quantity,
				0
			);
			updateTotalPriceInJSON(totalPrice);
			setTotalPrice(totalPrice);
		};
		updateCartItems(cartItems);
	}, [cartItems]);

	const value = {
		cartItems,
		addToCart,
		deleteFromCart,
		clearCart,
		totalPrice: totalPrice,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
