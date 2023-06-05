import React, { useState } from "react";
import { Btn } from "../styles/styledShoppingCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentModal = ({ onCancel, onCompletePayment }) => {
	const [cardNumber, setCardNumber] = useState("");
	const [cardName, setCardName] = useState("");
	const [expiryDate, setExpiryDate] = useState("");
	const [securityCode, setSecurityCode] = useState("");

	const notify = () =>
		toast.success("Payment Completed. Thank You!", {
			position: "top-center",
			autoClose: 4000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});

	const handleCompletePayment = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (!cardNumber || !cardName || !expiryDate || !securityCode) {
			toast.error("Please Complete All Fields", {
				position: "top-center",
				autoClose: 4000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
			return;
		}

		notify();
		onCompletePayment();
	};

	return (
		<div>
			<h3>Payment</h3>
			<form onSubmit={handleCompletePayment} action="/" method="POST">
				<label htmlFor="Credit/Debit Card Number">
					Credit/Debit Card Number
				</label>
				<input
					type="text"
					inputMode="numeric"
					id="Credit/Debit Card Number"
					name="Credit/Debit Card Number"
					placeholder="XXXX XXXX XXXX XXXX"
					maxLength="19"
					value={cardNumber}
					onChange={(e) => setCardNumber(e.target.value)}
					onClick={(e) => e.stopPropagation()}
					onInput={(e) => {
						const inputValue = e.target.value.replace(/\D/g, "").slice(0, 19);
						e.target.value = inputValue.replace(/(\d{4})(?=\d)/g, "$1 ");
						setCardNumber(inputValue);
					}}
				/>
				<label htmlFor="Name on Card">Name on Card</label>
				<input
					type="text"
					id="Name on Card"
					name="Name on Card"
					placeholder="John Doe"
					value={cardName}
					onChange={(e) => setCardName(e.target.value)}
					onClick={(e) => e.stopPropagation()}
				/>
				<label htmlFor="Expiry Date">Expiry Date</label>
				<input
					type="text"
					id="Expiry Date"
					name="Expiry Date"
					inputMode="numeric"
					placeholder="MM/YY"
					maxLength="5"
					value={expiryDate}
					onChange={(e) => setExpiryDate(e.target.value)}
					onClick={(e) => e.stopPropagation()}
					onInput={(e) => {
						e.target.value = e.target.value
							.replace(/\D/g, "")
							.slice(0, 4)
							.replace(/^(\d{2})/, "$1/");
					}}
				/>
				<label htmlFor="Security Code">Security Code</label>
				<input
					type="text"
					id="Security Code"
					name="Security Code"
					inputMode="numeric"
					maxLength="3"
					placeholder="XXX"
					value={securityCode}
					onChange={(e) => setSecurityCode(e.target.value)}
					onClick={(e) => e.stopPropagation()}
					onInput={(e) => {
						e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 3);
					}}
				/>
			</form>
			<Btn type="button" onClick={onCancel}>
				Back
			</Btn>
			<Btn type="submit" onClick={handleCompletePayment}>
				Complete Payment
			</Btn>
			<ToastContainer
				position="top-center"
				autoClose={4000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
		</div>
	);
};

export default PaymentModal;
