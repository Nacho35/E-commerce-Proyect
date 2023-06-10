import styled from "styled-components";
import { colors } from "./Theme";
import { animated } from "@react-spring/web";

export const Container = styled(animated.div)`
	width: 100%;
	max-width: 1500px;
	height: auto;
	max-height: 80vh;
`;

export const Heading = styled.h2`
	font-weight: 600;
	font-size: 2.3rem;
	color: ${colors.six};
	font-family: "Merriweather", serif;
	text-align: center;
`;

export const List = styled.ul`
	font-weight: 600;
	font-size: 1.5rem;
	color: ${colors.six};
	font-family: "Merriweather", serif;
	text-align: center;
	text-decoration: none;
	list-style-type: none;
`;

export const ListItem = styled.li`
	width: auto;
	height: auto;
	align-content: flex-start;
	display: flex;
	padding-top: 3%;

	@media (min-width: 375px) {
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
	}
	@media (min-width: 425px) {
		display: flex;
		flex-wrap: wrap;
		align-content: flex-start;
	}
`;

export const Title = styled.span`
	text-align: center;
	margin: 10px;
`;

export const Quantity = styled.span`
	text-align: center;
	margin: 10px;
`;

export const Price = styled.span`
	text-align: center;
	margin: 10px;
`;

export const TotalPrice = styled.p`
	font-weight: 600;
	font-size: 1.5rem;
	color: ${colors.six};
	font-family: "Merriweather", serif;
	text-align: center;
	padding-top: 3%;
`;
