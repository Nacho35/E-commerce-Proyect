import React from "react";
import {
	Container,
	Heading,
	List,
	ListItem,
	Title,
	Quantity,
	Price,
	TotalPrice,
} from "../styles/styled.PaymentTicket";
import "overlayscrollbars/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { useSpring, animated } from "@react-spring/web";

const AnimatedContainer = animated(Container);

const PaymentTicket = ({ cart, totalPrice }) => {
	const animation = useSpring({
		opacity: 1,
		from: { opacity: 0 },
		config: {
			delay: 500,
		},
	});
	return (
		<OverlayScrollbarsComponent
			options={{
				scrollbars: {
					theme: "os-theme-dark",
					autoHide: "scroll",
					pointers: ["mouse", "touch", "pen"],
				},
			}}
			defer>
			<AnimatedContainer style={{ ...animation }}>
				<Heading>Payment Ticket</Heading>
				<List>
					{cart.map((item) => (
						<ListItem key={item.id}>
							<Title>{item.title}</Title>
							<Quantity>Quantity: {item.quantity} </Quantity>
							<Price>Price: ${item.price.toFixed()}</Price>
						</ListItem>
					))}
				</List>
				<TotalPrice>Total Price: ${totalPrice.toFixed()}</TotalPrice>
			</AnimatedContainer>
		</OverlayScrollbarsComponent>
	);
};

export default PaymentTicket;
