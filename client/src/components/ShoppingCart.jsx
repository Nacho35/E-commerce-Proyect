import React, { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
	CartContainer,
	Btn,
	CartButton,
	Icons,
	List,
	Subtitle,
	Title,
	Price,
	EmptyCart,
} from "../styles/styledShoppingCart";
import CartS from "../assets/cart.svg";
import Cross from "../assets/cross2.svg";
import ProductItem from "./ProductItem";
import PaymentTicket from "./PaymentTicket";
import { CartContext } from "./CartContext";
import PaymentModal from "./PaymentModal";

const ShoppingCart = () => {
	const { cart, addToCart, deleteFromCart, clearCart, totalPrice } =
		useContext(CartContext);

	const [isOpen, setIsOpen] = useState(false);
	const [isPaymentOpen, setIsPaymentOpen] = useState(false);
	const [isPaymentDataOpen, setIsPaymentDataOpen] = useState(false);

	const handleGoToPayment = (e) => {
		e.stopPropagation();
		setIsPaymentOpen(true);
	};

	const handleClosePayment = (e) => {
		e.stopPropagation();
		setIsPaymentOpen(false);
	};

	const handleOpenPaymentData = (e) => {
		e.stopPropagation();
		setIsPaymentDataOpen(true);
	};

	const handleCancelPayment = (e) => {
		e.stopPropagation();
		setIsPaymentDataOpen(false);
		setIsOpen(true);
	};

	const handleCompletePayment = () => {
		setIsPaymentOpen(false);
		setIsPaymentDataOpen(false);
		setIsOpen(true);
	};

	return (
		<CartButton type="button" onClick={() => setIsOpen(!isOpen)}>
			{!isOpen ? (
				<Icons src={CartS} alt="cart icon" />
			) : (
				<Icons src={Cross} alt="cross icon" />
			)}
			<ToastContainer />
			<CartContainer
				style={{
					display: isOpen ? "block" : "none",
				}}>
				<Title>My Cart</Title>
				{cart.length === 0 ? (
					<EmptyCart>Ops! Nothing Here</EmptyCart>
				) : (
					<>
						<List>
							{cart.map((product, id) => (
								<ProductItem
									key={id}
									product={product}
									addToCart={addToCart}
									deleteFromCart={deleteFromCart}
									handleGoToPayment={handleGoToPayment}
									showButtons={true}
									showDeleteButton={true}
								/>
							))}
						</List>
						<hr />
						<Subtitle>
							Total Price:
							<Price>${totalPrice.toFixed(2)}</Price>
						</Subtitle>
						<Btn onClick={clearCart}>Clear cart</Btn>
						<Btn onClick={handleGoToPayment}>Go to Payment</Btn>
						{isPaymentOpen && (
							<div className="modal">
								<div className="modal-content">
									<PaymentTicket cart={cart} totalPrice={totalPrice} />
									<Btn onClick={handleClosePayment}>Close</Btn>
									<Btn onClick={handleOpenPaymentData}>Checkout</Btn>
								</div>
							</div>
						)}
						{isPaymentDataOpen && (
							<div className="modal">
								<div className="modal-content">
									<PaymentModal
										onCancel={handleCancelPayment}
										onCompletePayment={handleCompletePayment}
									/>
								</div>
							</div>
						)}
					</>
				)}
			</CartContainer>
		</CartButton>
	);
};

export default ShoppingCart;
