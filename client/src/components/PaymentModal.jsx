import React from "react";
import { Btn } from "../styles/styledShoppingCart";

//** CONTINUAR COMO EL BOTON DE Complete Payment PARA QUE DEVUELVA UNA NOTIFICACION CENTRADA ARRIBA DE LA PANTALLA Y CIERRE TODOS LOS MODALES QUE HAY */
const PaymentModal = ({ onCancel }) => {
	return (
		<div>
			<h3>Payment form</h3>
			<form>
				<label htmlFor="">Credit/Debit Card Number</label>
				<input type="number" />
				<label htmlFor="">Name on Card</label>
				<input type="text" />
				<label htmlFor="">Expiry Date</label>
				<input type="number" />
				<label htmlFor="">Security Code</label>
				<input type="number" />
			</form>
			<Btn type="button" onClick={onCancel}>
				Back
			</Btn>
			<Btn type="button">Complete Payment</Btn>
		</div>
	);
};

export default PaymentModal;
