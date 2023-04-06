import React, { useEffect, useState } from "react";
import { useSpring } from "@react-spring/web";
import Mode from "../assets/mode.svg";
import Mode2 from "../assets/mode2.svg";
import ShoppingCart from "./ShoppingCart";
import {
	Nav,
	Box,
	Box1,
	Box2,
	Links,
	B,
	SPAN,
	Btn,
	Boxburguer2,
	Boxburguer1,
	AB,
	Cross,
	Bars,
	Modebtn,
	BoxB,
	Cartbox,
} from "../styles/styledNavbar";

const Navbar = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [svg, setSvg] = useState("Mode");

	const handleClick = () => {
		if (svg === "Mode") {
			setSvg("Mode2");
			props.toggleTheme();
		} else {
			setSvg("Mode");
			props.toggleTheme();
		}
	};

	const handleWindowResize = () => {
		if (window.innerWidth > 800) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	const btnAnimation = useSpring({
		transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
	});

	const menuAnimation = useSpring({
		opacity: isOpen ? 1 : 0,
		height: isOpen ? "12%" : "0",
	});

	const boxAnimation = useSpring({
		opacity: isOpen ? 1 : 0,
		width: isOpen ? "100%" : "0%",
	});

	return (
		<Nav>
			<Box>
				<Box1 style={{ display: isOpen ? "none" : "flex" }}>
					<BoxB>
						<Modebtn type="button" onClick={handleClick}>
							<img src={svg === "Mode" ? Mode : Mode2} alt="icon" />
						</Modebtn>
					</BoxB>
					<B to="/">
						SARGIOTTI'S <SPAN>Restaurant</SPAN>
					</B>
				</Box1>
				<Box2 style={{ display: isOpen ? "none" : "flex" }}>
					<Links to="/home">HOME</Links>
					<Links to="/about">ABOUT US</Links>
					<Links to="/chef">CHEFS</Links>
					<Links to="/menu">MENU</Links>
					<Links to="/gallery">GALLERY</Links>
					<Links to="/contact">CONTACTS</Links>
				</Box2>
			</Box>
			<Boxburguer1>
				<Boxburguer2
					style={(boxAnimation, { display: isOpen ? "block" : "none" })}>
					<AB style={menuAnimation} to="/home">
						HOME
					</AB>
					<AB style={menuAnimation} to="/about">
						ABOUT US
					</AB>
					<AB style={menuAnimation} to="/chef">
						CHEFS
					</AB>
					<AB style={menuAnimation} to="/menu">
						MENU
					</AB>
					<AB style={menuAnimation} to="/gallery">
						GALLERY
					</AB>
					<AB style={menuAnimation} to="/contact">
						CONTACTS
					</AB>
				</Boxburguer2>
				<Btn
					style={btnAnimation}
					type="button"
					onClick={() => setIsOpen(!isOpen)}>
					{!isOpen ? (
						<Bars
							width="50px"
							height="50px"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							fill="none">
							<path
								stroke="#f9430a"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6H20M4 12H20M4 18H20"
							/>
						</Bars>
					) : (
						<Cross
							fill="none"
							width="50px"
							height="50px"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								stroke="#f9430a"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1"
								d="M4.293,18.293,10.586,12,4.293,5.707A1,1,0,0,1,5.707,4.293L12,10.586l6.293-6.293a1,1,0,1,1,1.414,1.414L13.414,12l6.293,6.293a1,1,0,1,1-1.414,1.414L12,13.414,5.707,19.707a1,1,0,0,1-1.414-1.414Z"
							/>
						</Cross>
					)}
				</Btn>
			</Boxburguer1>
			<Cartbox>
				<ShoppingCart />
			</Cartbox>
		</Nav>
	);
};

export default Navbar;
