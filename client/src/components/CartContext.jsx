import React, { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";

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
		const { id, src, title, price } = product;
		const itemExists = cart.find((item) => item.id === id);

		const updatedCart = itemExists
			? cart.map((item) =>
					item.id === id ? { ...item, quantity: item.quantity + 1 } : item
			  )
			: [
					...cart,
					{
						id: id,
						src: src,
						title: title,
						price: price,
						quantity: 1,
					},
			  ];

		axios
			.post("http://localhost:3001/cart", product)
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
			setCart(JSON.parse(storedCart));
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
		e.stopPropagation();
		axios
			.put("http://localhost:3001/cart", []) //!! sigue sin funcionar !!
			.then(() => {
				setCart([]);
				localStorage.removeItem("cart");
			})
			.catch((error) => {
				console.error("Error al vaciar el carrito:", error);
			});
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
