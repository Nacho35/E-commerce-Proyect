import React, { useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useSpring, animated } from "@react-spring/web";
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
	Divider,
} from "../styles/styledShoppingCart";
import CartS from "../assets/cart.svg";
import Cross from "../assets/cross2.svg";
import emptycart from "../assets/cart-empty.svg";
import ProductItem from "./ProductItem";
import PaymentTicket from "./PaymentTicket";
import { CartContext } from "./CartContext";
import PaymentModal from "./PaymentModal";

const AnimatedCartContainer = animated(CartContainer);

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

	const animation = useSpring({
		opacity: isOpen ? 1 : 0,
		config: {
			delay: isOpen ? 0 : 700,
		},
	});

	return (
		<CartButton type="button" onClick={() => setIsOpen(!isOpen)}>
			{!isOpen ? (
				<Icons src={CartS} alt="cart icon" />
			) : (
				<Icons src={Cross} alt="cross icon" />
			)}
			<ToastContainer />
			<AnimatedCartContainer
				style={{
					...animation,
					display: isOpen ? "block" : "none",
				}}>
				<Title>My Cart</Title>
				{cart.length === 0 ? (
					<EmptyCart>
						<img src={emptycart} alt="empty cart" />
						<p>Ops! Nothing Here</p>
					</EmptyCart>
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
						<Divider />
						<Subtitle>
							Total Price:
							<Price>${totalPrice.toFixed()}</Price>
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
			</AnimatedCartContainer>
		</CartButton>
	);
};

export default ShoppingCart;
