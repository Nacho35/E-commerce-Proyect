import { animated } from "@react-spring/web";
import styled from "styled-components";
import { colors } from "./Theme";

export const Box = styled.div`
	display: flex;
	justify-items: center;
	padding: 10px;
	position: fixed;
	width: auto;
	height: auto;
`;

export const Box2 = styled(animated.div)`
	background-color: ${(props) => props.theme.body};
	position: static;
	height: auto;
	width: auto;
	display: flex;
	align-items: flex-start;
	box-sizing: border-box;
	border-radius: 10px;
	padding: 10px;
`;

export const CartButton = styled(animated.button)`
	border-radius: 10px;
	background-color: transparent;
	border: solid;
	border-color: transparent;
	cursor: pointer;
	width: 43px;
	height: 43px;
`;

export const Icons = styled.img`
	color: ${colors.five};
	width: 43px;
	height: 43px;
`;

export const Innerbox = styled.div`
	width: auto;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Title = styled(animated.h2)`
	text-align: center;
	color: ${colors.five};
	font-weight: 600;
	font-size: 1.5rem;
	margin: auto;
`;

export const Subtitle = styled(animated.p)`
	text-align: start;
	color: ${colors.five};
	font-weight: 600;
	font-size: 1rem;
`;

export const Btn = styled(animated.button)`
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

export const List = styled.div`
	display: flex;
	align-content: center;
	flex-direction: column;
	width: auto;
	max-height: 35rem;
	overflow-y: scroll;
	overflow-x: hidden;

	@media (min-width: 1200px) {
		@media (orientation: landscape) {
			display: flex;
			flex: auto;
			flex-direction: column;
			flex-wrap: nowrap;
			gap: 1rem;
		}
	}
`;

export const Boxbtn = styled.div`
	margin: auto;
	display: flex;
	justify-content: center;
`;
