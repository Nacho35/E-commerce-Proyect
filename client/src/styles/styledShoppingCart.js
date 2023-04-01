import styled from "styled-components";
import { colors } from "./Theme";

export const CartContainer = styled.div`
	display: none;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	width: 300px;
	padding: 1rem;
	background-color: ${(props) => props.theme.body};
	overflow-y: auto;

	@media (min-width: 768px) {
		display: block;
		width: 400px;
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
	color: ${colors.five};
	font-size: 1.5rem;
	margin-bottom: 1rem;
`;

export const Subtitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.25rem;
	margin-bottom: 1rem;
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
	margin: 0;
	padding: 0;
`;

export const Price = styled.span`
	font-weight: bold;
`;

export const EmptyCart = styled.p`
	margin-top: 1rem;
	color: ${colors.five};
`;
