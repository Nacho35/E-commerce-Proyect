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
	const [totalPrice, setTotalPrice] = useState(0);

	const addToCart = (product) => {
		const cartItemId = uuidv4();
		const { id, src, title, price } = product;
		const itemExists = cart.find((item) => item.productId === id);

		if (itemExists) {
			return;
		}

		const updatedCart = itemExists
			? cart.map((item) =>
					item.id === id ? { ...item, quantity: item.quantity + 1 } : item
			  )
			: [
					...cart,
					{
						id: cartItemId,
						productId: id,
						src: src,
						title: title,
						price: price,
						quantity: 1,
					},
			  ];

		axios
			.post("http://localhost:3001/cart", {
				...product,
				id: cartItemId,
			})
			.then((response) => {
				console.log(response);
				setCart(updatedCart);
				localStorage.setItem("cart", JSON.stringify(updatedCart));
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		axios
			.get("http://localhost:3001/products")
			.then(() => {})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		const storedCart = localStorage.getItem("cart");
		if (storedCart) {
			try {
				const parsedCart = JSON.parse(storedCart);
				setCart(parsedCart);
			} catch (error) {
				console.log(error);
			}
		}
	}, []);

	const deleteFromCart = (id) => {
		axios
			.delete(`http://localhost:3001/cart/${id}`)
			.then((response) => {
				console.log(response);
				setCart(cart.filter((item) => item.id !== id));
				localStorage.setItem(
					"cart",
					JSON.stringify(cart.filter((item) => item.id !== id))
				);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const clearCart = (e) => {
		setCart([]);
		axios
			.delete("http://localhost:8080/clear-cart")
			.then((response) => {
				console.log(response.data);
				localStorage.removeItem("cart");
			})
			.catch((error) => {
				console.log(error);
			});
		e.stopPropagation();
	};

	useEffect(() => {
		const totalPrice = cart.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
		setTotalPrice(totalPrice);
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
