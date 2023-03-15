import React, { useState } from "react";
import { useSpring } from "@react-spring/web";
import {
	Box,
	Box2,
	Box3,
	Btn,
	CartButton,
	Icons,
	Innerbox,
	List,
	Subtitle,
	Title,
} from "../styles/styledShoppingCart";
import CartS from "../assets/cart.svg";
import Cross from "../assets/cross2.svg";
import baseDeDatos from "./ShoppingCart";
import miLocalStorage from "./ShoppingCart";

const Cart = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [productos, setProductos] = useState(baseDeDatos);
	const [carrito, setCarrito] = useState([]);

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

	const vaciarCarrito = () => {
		setCarrito([]);
		guardarCarritoEnLocalStorage([]);
	};

	const guardarCarritoEnLocalStorage = (carrito) => {
		miLocalStorage.setItem("carrito", JSON.stringify(carrito));
	};

	const cargarCarritoDesdeLocalStorage = () => {
		const carritoGuardado = JSON.parse(miLocalStorage.getItem("carrito"));
		if (carritoGuardado) {
			setCarrito(carritoGuardado);
		}
	};

	const agregarProductoAlCarrito = (id) => {
		const nuevoCarrito = [...carrito, id];
		setCarrito(nuevoCarrito);
		guardarCarritoEnLocalStorage(nuevoCarrito);
	};

	const eliminarProductoDelCarrito = (id) => {
		const nuevoCarrito = carrito.filter((producto) => producto !== id);
		setCarrito(nuevoCarrito);
		guardarCarritoEnLocalStorage(nuevoCarrito);
	};

	const calcularTotal = () => {
		const total = carrito.reduce((acc, id) => {
			const producto = productos.find((p) => p.id === parseInt(id));
			return acc + producto.precio;
		}, 0);

		return (
			<Box>
				<Box2 style={(boxAnimation, { display: isOpen ? "block" : "none" })}>
					<Box3 id="items"></Box3>
					<Innerbox>
						<Title style={menuAnimation}>My Cart</Title>
						<List id="carrito"></List>
						<hr />
						<Subtitle style={menuAnimation}>
							Total To Pay: <span id="total"></span>$
						</Subtitle>
						<Btn style={menuAnimation} id="boton-vaciar">
							Empty
						</Btn>
						<Btn style={menuAnimation} id="boton-pagar">
							Buy
						</Btn>
					</Innerbox>
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
};

export default Cart;
