import styled from "styled-components";

export const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	background-image: ${(props) => props.theme.backgroundImage2};
	background-size: auto;
	text-align: center;
	width: auto;
	height: auto;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: min-content 1fr 1fr;
	gap: 1rem;
	align-items: center;
	overflow: hidden;
	padding-top: 3rem;
	padding-bottom: 2rem;

	@media (min-width: 360px) {
		display: flex;
		flex-direction: column;
	}
	@media (min-width: 776px) {
		display: flex;
		flex-direction: column;
	}
	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: min-content 1fr 1fr;
		gap: 1rem;
	}
	@media (min-width: 1024px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: min-content 1fr 1fr;
		gap: 1rem;
	}
	@media (min-width: 1200px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: min-content 1fr 1fr;
		gap: 1rem;
	}
`;

export const Box2 = styled.div`
	grid-column: 1 / span 2;
	grid-row: 1 / span 1;
	display: grid;
	align-items: center;
`;

export const Box3 = styled.div`
	display: flex;
	justify-content: center;
	padding: 1.5rem;
`;

export const Icon = styled.img`
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

export const Text = styled.p`
	color: ${(props) => props.theme.text};
	text-align: justify;
	font-size: 1rem;
	display: flex;
	justify-self: center;
	margin: 1rem;

	@media (min-width: 776px) {
		width: auto;
		margin: 1rem;
	}

	@media (min-width: 992px) {
		width: auto;
		margin: 1rem;
	}

	@media (min-width: 1200px) {
		width: 70%;
		font-size: 1rem;
		margin: 1rem;
	}
`;

export const Card = styled.figure`
	transition: all 1s ease;
	filter: grayscale(80%);

	&:hover {
		transform: scale(1.1);
		filter: none;
		cursor: auto;
	}
`;

export const Image = styled.img`
	border-radius: 10px;
`;

export const H3 = styled.h3`
	color: ${(props) => props.theme.text};
`;

export const H4 = styled.h4`
	color: ${(props) => props.theme.text};
	text-transform: capitalize;
`;

export const Icons = styled.img`
	margin: 1.5rem;
	text-decoration: none;
	cursor: pointer;
`;
