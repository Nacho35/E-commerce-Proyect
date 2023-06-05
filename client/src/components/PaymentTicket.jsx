import React from "react";

const PaymentTicket = ({ cart, totalPrice }) => {
	return (
		<div>
			<h2>Payment Ticket</h2>
			<ul>
				{cart.map((item) => (
					<li key={item.id}>
						<span>{item.title}</span>
						<span>Quantity: {item.quantity} </span>
						<span>Price: ${item.price}</span>
					</li>
				))}
			</ul>
			<p>Total Price: ${totalPrice}</p>
		</div>
	);
};

export default PaymentTicket;
