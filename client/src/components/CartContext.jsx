import React, { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const CartContext = createContext({
	cart: [],
	setCart: () => {},
	addToCart: () => {},
	deleteFromCart: () => {},
	clearCart: () => {},
	totalPrice: 0,
});

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [products, setProducts] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		axios
			.get("http://localhost:3001/products")
			.then((response) => {
				if (response && response.data) {
					setProducts(response.data);
					console.log(response.data);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const addToCart = (productId) => {
		const product = products.find((product) => product.id === productId);
		const itemExists = cart.find((item) => item.productId === productId);

		if (itemExists) {
			const updatedCart = cart.map((item) =>
				item.productId === productId
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			axios
				.put(`http://localhost:3001/cart/${productId}`, { cart: updatedCart })
				.then(() => {
					setCart(updatedCart);
					localStorage.setItem("cart", JSON.stringify(updatedCart));
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			const newItem = {
				productId: productId,
				id: uuidv4(),
				src: product.src,
				title: product.title,
				price: product.price,
				quantity: 1,
			};
			axios
				.post("http://localhost:3001/cart", { item: newItem })
				.then(() => {
					setCart([...cart, newItem]);
					localStorage.setItem("cart", JSON.stringify([...cart, newItem]));
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	useEffect(() => {
		const storedCart = localStorage.getItem("cart");
		if (storedCart) {
			setCart(JSON.parse(storedCart));
		}
	}, []);

	const deleteFromCart = (id) => {
		axios
			.delete(`http://localhost:3001/cart/${id}`)
			.then(() => {
				setCart(cart.filter((item) => item.id !== id));
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const clearCart = () => {
		axios
			.delete("http://localhost:3001/cart")
			.then(() => {
				setCart([]);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const updateTotalPriceInJSON = (totalPrice) => {
		axios
			.put("http://localhost:3001/totalPrice", {
				value: totalPrice,
			})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	useEffect(() => {
		const updateCartItems = (newCartItems) => {
			setCart(newCartItems);
			const totalPrice = newCartItems.reduce(
				(total, item) => total + item.price * item.quantity,
				0
			);
			setTotalPrice(totalPrice);
			updateTotalPriceInJSON(totalPrice);
		};

		updateCartItems(cart);
	}, [cart]);

	const value = {
		cart,
		setCart,
		addToCart,
		deleteFromCart,
		clearCart,
		totalPrice,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => useContext(CartContext);

export { CartContextProvider, useCart };
