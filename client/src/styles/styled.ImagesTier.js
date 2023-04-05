import styled from "styled-components";

export const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	background-image: ${(props) => props.theme.backgroundImage2};
	background-size: auto;
	width: auto;
	height: auto;
	overflow: hidden;
	padding-top: 2rem;
	padding-bottom: 2rem;
`;

export const Box2 = styled.div`
	display: flex;
	justify-content: center;
	padding: 1.5rem;
`;

export const I = styled.img`
	width: 10%;
	height: auto;
	margin-right: 1rem;

	@media (min-width: 360px) {
		width: 10%;
		height: auto;
	}

	@media (min-width: 776px) {
		width: 6%;
		height: auto;
	}

	@media (min-width: 992px) {
		width: 3%;
		height: auto;
	}

	@media (min-width: 1200px) {
		width: 6%;
		height: auto;
	}
	@media (min-width: 1024px) {
		width: 5%;
		height: auto;
	}
	@media (min-width: 1280px) {
		width: 3%;
		height: auto;
	}
`;

export const Title = styled.h2`
	color: ${(props) => props.theme.text};
	text-transform: uppercase;
	font-size: 1.7rem;
	display: flex;
	justify-content: center;
`;

export const Box3 = styled.div`
	display: block;
	justify-content: center;
	width: 80%;
	margin: auto;
	padding-bottom: 5%;

	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
	}
	@media (min-width: 1024px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
	}
	@media (min-width: 1200px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: auto;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: auto;
	margin: auto;
	transition: all 1s ease;
	filter: grayscale(1);

	&:hover {
		transform: scale(1.1);
		z-index: 999;
		filter: none;
	}
`;
