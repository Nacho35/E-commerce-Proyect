import React from "react";
import { Box, Box2, Btn, SPAN, Title } from "../styles/styledBanner";

const Banner = () => {
	return (
		<Box>
			<Box2>
				<Title>
					Double Cheese Pizza <SPAN>30% off friday only</SPAN>
				</Title>
				<Btn type="button" to="/form">
					BOOK A TABLE
				</Btn>
			</Box2>
		</Box>
	);
};

export default Banner;
