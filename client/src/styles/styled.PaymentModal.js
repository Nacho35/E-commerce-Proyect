import styled from "styled-components";
import { colors } from "./Theme";
import { animated } from "@react-spring/web";

export const Container = styled(animated.div)`
	width: 100%;
	max-width: 1500px;
	height: auto;
	max-height: 80vh;
`;

export const Title = styled.h3`
	font-weight: 600;
	font-size: 2.3rem;
	color: ${colors.six};
	font-family: "Merriweather", serif;
	text-align: center;
`;

export const Form = styled.form`
	width: auto;
	height: auto;
	font-weight: 600;
	font-size: 1rem;
	color: ${colors.six};
	font-family: "Merriweather", serif;
	display: flex;
	flex-direction: column;
	margin: auto;
`;

export const Label = styled.label`
	margin-top: 1rem;
`;

export const Field = styled.input`
	padding: 1%;
	margin: 1rem;
`;
