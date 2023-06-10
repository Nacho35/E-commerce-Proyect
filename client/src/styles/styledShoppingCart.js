import styled from "styled-components";
import { colors } from "./Theme";
import { animated } from "@react-spring/web";

export const CartContainer = styled(animated.div)`
	display: none;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	width: auto;
	height: auto;
	padding: 10px;
	background-color: ${(props) => props.theme.body};
	overflow-y: scroll;
	overflow-x: hidden;

	@media (min-width: 375px) {
		display: block;
		width: 80%;
	}

	@media (min-width: 768px) {
		display: block;
		width: 40%;
	}

	@media (min-width: 992px) {
		display: block;
		width: 35%;
	}

	@media (min-width: 1024px) {
		display: block;
		width: 35%;
	}

	@media (min-width: 1200px) {
		display: block;
		width: 30%;
	}

	@media (min-width: 1920px) {
		display: block;
		width: 20%;
	}
`;

export const CartButton = styled.button`
	position: absolute;
	background-color: transparent;
	border: none;
	cursor: pointer;
`;

export const Icons = styled.img`
	color: ${colors.five};
	width: 100%;
`;

export const Title = styled.h2`
	color: orangered;
	font-size: 1.5rem;
	margin-bottom: 1rem;
	font-family: "Merriweather", serif;
`;

export const Subtitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.25rem;
	font-weight: 600;
	margin-bottom: 1rem;
	color: orangered;
	font-family: "Merriweather", serif;
`;

export const Btn = styled.button`
	--bg: ${(props) => props.theme.button};
	--hover-bg: #000;
	--hover-text: #fff;
	color: #000;
	border: 1px solid var(--bg);
	border-radius: 4px;
	padding: 0.8em 2em;
	background: var(--bg);
	transition: 0.2s;
	text-decoration: none;
	font-weight: bold;
	width: fit-content;
	cursor: pointer;
	margin: 10px;

	&:hover {
		color: var(--hover-text);
		transform: translate(-0.25rem, -0.25rem);
		background: var(--hover-bg);
		box-shadow: 0.25rem 0.25rem var(--bg);
	}

	&:active {
		transform: translate(0);
		box-shadow: none;
	}
`;

export const List = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	grid-column-gap: 10px;
	grid-row-gap: 10px;
	padding: 1rem;
`;

export const Price = styled.span`
	font-weight: 600;
	color: orangered;
	font-family: "Merriweather", serif;
`;

export const EmptyCart = styled.div`
	margin-top: 10rem;
	color: orangered;
	font-size: 2rem;
`;

export const Divider = styled.p`
	border-top: 1px solid orangered;
`;
