import styled from "styled-components";

export const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	background-image: ${(props) => props.theme.backgroundImage2};
	background-size: cover;
	width: auto;
	height: auto;
	overflow: hidden;
	padding-bottom: 13rem;
	padding-top: 4rem;
`;

export const Box2 = styled.div`
	display: flex;
	justify-content: center;
	padding: 1.5rem;
`;

export const Box3 = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	justify-content: center;

	@media (min-width: 360px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: auto;
	}
	@media (min-width: 776px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: auto;
	}
	@media (min-width: 992px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: auto;
	}
	@media (min-width: 1200px) {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin: auto;
	}
`;

export const F = styled.form`
	display: flex;
	flex-direction: column;
	margin: auto;
`;

export const InnerBox = styled.div`
	display: flex;
	margin-bottom: 3rem;

	@media (max-width: 360px) {
		display: flex;
		flex-direction: column;
		margin-bottom: 3rem;
	}

	@media (max-width: 776px) {
		display: flex;
		flex-direction: column;
		margin-bottom: 3rem;
	}

	@media (max-width: 992px) {
		display: flex;
		margin-bottom: 3rem;
	}
`;

export const InsideBox = styled.div`
	margin: 1em;
`;

export const Tag = styled.label`
	color: ${(props) => props.theme.text};
	font-weight: 600;
	font-size: 1rem;
	text-transform: uppercase;
	display: block;
	margin-bottom: 5px;
`;

export const Data = styled.input`
	background-color: ${(props) => props.theme.text};
	height: 100%;
	width: 100%;
	border: none;
	margin-right: 10rem;
	color: white;
	text-align: start;

	@media (min-width: 776px) {
		width: 100%;
	}
	@media (min-width: 992px) {
		width: 100%;
	}
`;

export const Title = styled.h2`
	color: ${(props) => props.theme.text};
	text-align: center;
	text-transform: uppercase;
	font-size: 1.7rem;
	display: block;
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
	text-transform: uppercase;

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

export const BoxInfo = styled.div`
	display: block;
	background-color: ${(props) => props.theme.text};
	justify-content: space-between;
	margin-bottom: auto;
	width: 50%;
	height: 90%;
	margin-top: 2rem;
	padding-bottom: 2rem;

	@media (min-width: 360px) {
		display: flex;
		flex-direction: column;
		width: 90%;
		height: auto;
		margin: auto;
	}
	@media (min-width: 776px) {
		display: flex;
		flex-direction: column;
		width: 60%;
		height: auto;
		margin: auto;
	}
	@media (min-width: 992px) {
		display: flex;
		flex-direction: column;
		width: 50%;
		height: auto;
		margin-bottom: 4rem;
	}
	@media (min-width: 1200px) {
		display: flex;
		flex-direction: column;
		width: 30%;
		height: auto;
		margin-bottom: 4rem;
	}
`;

export const TitleInfo = styled.h3`
	color: ${(props) => props.theme.body};
	text-transform: uppercase;
	font-size: 2rem;
	text-align: start;
	margin-left: 1rem;
	font-weight: 900;
`;

export const TextInfo = styled.p`
	color: ${(props) => props.theme.body};
	text-align: start;
	margin-left: 1rem;
`;

export const Schedules = styled.h4`
	color: ${(props) => props.theme.body};
	display: flex;
	justify-content: space-between;
	padding: 0.8rem;
	border-bottom: 1px solid ${(props) => props.theme.body};
	margin: 1rem;
`;

export const Separate2 = styled.span`
	display: flex;
	text-align: right;
`;

export const Separate = styled.span`
	text-align: left;
	display: flex;
`;
