import styled from "styled-components";

export const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	background-image: ${(props) => props.theme.backgroundImage2};
	background-size: auto;
	width: auto;
	height: auto;
	overflow: hidden;
	padding-top: 2rem;
`;

export const Box2 = styled.div`
	display: flex;
	justify-content: center;
	padding: 1rem;
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
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Box4 = styled.div`
	display: flex;
	justify-content: space-between;
	width: auto;
	height: auto;

	@media (min-width: 360px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 1rem;
	}
	@media (min-width: 776px) {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-bottom: 1rem;
	}
	@media (min-width: 992px) {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-bottom: 1rem;
	}
	@media (min-width: 1200px) {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-bottom: 2rem;
	}
`;

export const InnerBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const InsideBox = styled.div`
	display: flex;
	align-self: center;
	margin: auto;
`;

export const InsideBox2 = styled.div`
	display: flex;
	align-self: center;
	margin: auto;
	padding: 1.5rem;
`;

export const InnerBox2 = styled.div`
	display: flex;
	align-items: center;
	width: auto;
	height: auto;

	@media (min-width: 360px) {
		display: flex;
		flex-direction: row;
		margin-top: 1rem;
		justify-content: center;
	}
	@media (min-width: 776px) {
		display: flex;
		flex-direction: row;
		margin-top: 1rem;
		justify-content: center;
	}
	@media (min-width: 992px) {
		display: flex;
		flex-direction: row;
		margin-top: 2rem;
		justify-content: center;
	}
	@media (min-width: 1200px) {
		display: flex;
		flex-direction: row;
		margin-top: 2rem;
		justify-content: center;
	}
`;

export const IC = styled.img`
	width: 3rem;
	height: auto;
	margin: 1rem;
`;

export const H4 = styled.h4`
	color: ${(props) => props.theme.text};
	font-size: 1rem;
	text-align: center;
	margin: auto;

	&:hover {
		color: ${(props) => props.theme.hover};
		cursor: default;
	}
`;

export const Social = styled.img`
	width: 2.5rem;
	height: auto;
	margin: auto;
	margin-right: 2rem;
	margin-left: 2rem;

	@media (min-width: 360px) {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
	@media (min-width: 776px) {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
	@media (min-width: 992px) {
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
`;

export const BoxMap = styled.div`
	display: flex;
	justify-content: center;
	width: auto;
	height: 25ch;
	padding-bottom: 5%;
`;

export const Reserved = styled.div`
	display: flex;
	justify-content: center;

	@media (min-width: 360px) {
		padding-top: 16rem;
	}
	@media (min-width: 776px) {
		padding-top: 16rem;
	}
	@media (min-width: 992px) {
		padding-top: 15rem;
	}
	@media (min-width: 1200px) {
		padding-top: 12rem;
	}
`;

export const Copy = styled.h5`
	color: ${(props) => props.theme.text};
	text-align: center;
	font-size: 1rem;
	font-weight: 600;
	text-transform: uppercase;
	margin: 1rem;
`;
