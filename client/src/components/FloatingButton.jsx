import React from "react";
import arrowup from "../assets/up-arrow.svg";
import { Floating } from "../styles/FloatingButton";

function FloatingButton() {
	return (
		<Floating onClick={scrollToTop}>
			<img src={arrowup} alt="arrow" />
		</Floating>
	);
}
function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
export default FloatingButton;
