import React from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { createContext, useEffect, useState } from "react";

const CartContext = createContext({
	cartItems: [],
});

const CartContextProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	debugger;
	useEffect(() => {
		axios
			.get("http://localhost:3001/cart")
			.then((response) => {
				if (response && response.data) {
					const { cartItems, totalPrice } = response.data;
					setCartItems(cartItems);
					setTotalPrice(totalPrice);
				}
			})
			.catch((error) => {
				console.error(error);
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
				.get(`http://localhost:3001/products/\${productId}`)
				.then((response) => {
					const product = response.data;
					const newItem = {
						productId: productId,
						id: uuidv4(),
						src: product.src,
						title: product.title,
						price: product.price,
						quantity: 1,
					};
					axios.post("http://localhost:3001/cart", newItem).then(() => {
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
			.then((response) => {
				// console.log(response);
			})
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
	}, [cartItems, totalPrice]);

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
