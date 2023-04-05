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

export const Box3 = styled.div`
	display: flex;
	justify-content: center;
	padding-bottom: 2rem;

	@media (min-width: 360px) {
		display: flex;
		flex-wrap: wrap;
	}

	@media (min-width: 776px) {
		display: flex;
		flex-wrap: wrap;
	}

	@media (min-width: 992px) {
		display: flex;
		flex-wrap: wrap;
	}

	@media (min-width: 1200px) {
		display: flex;
		flex-wrap: wrap;
	}
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

export const BoxBtn = styled.div`
	display: flex;
	margin: 1rem;
`;

export const Btn = styled.a`
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

export const Box4 = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	justify-content: center;

	@media (min-width: 776px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
		margin: auto;
	}
	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
		margin: auto;
	}
	@media (min-width: 1200px) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: auto;
		margin: auto;
	}
`;

export const BoxImg = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 1rem;
`;

export const Img = styled.img`
	width: 80%;
	height: auto;
	border-radius: 1rem;
	margin: auto;
	transition: all 1s ease;

	&:hover {
		transform: scale(1.1);
	}

	@media (min-width: 776px) {
		width: 65%;
		height: auto;
		border-radius: 1rem;
		margin: auto;
	}
	@media (min-width: 992px) {
		width: 60%;
		height: auto;
		border-radius: 1rem;
		margin: auto;
	}
	@media (min-width: 1200px) {
		width: 80%;
		height: auto;
		border-radius: 1rem;
		margin: auto;
	}
`;

export const TitleImg = styled.h3`
	color: ${(props) => props.theme.text};
	text-align: center;
	text-transform: uppercase;
	font-size: 1rem;
	margin: 1rem;
`;

export const Text = styled.h4`
	color: ${(props) => props.theme.text};
	text-align: center;
	font-size: 1rem;
	display: block;
	margin: 1rem;

	@media (min-width: 776px) {
		width: auto;
		height: auto;
		margin: 1rem;
	}

	@media (min-width: 992px) {
		width: auto;
		height: auto;
		margin: 1rem;
	}

	@media (min-width: 1200px) {
		width: auto;
		height: auto;
		margin: 1rem;
	}
`;

export const Price = styled.h5`
	color: ${(props) => props.theme.text2};
	display: flex;
	justify-content: center;
	font-weight: 900;
	font-size: large;
	margin: 1.5rem;
`;

export const Btn2 = styled.button`
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
	align-self: center;
	margin: 1.5rem;

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
