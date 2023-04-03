import TYPES from "../actions/shoppingAction";

export const initialState = {
	cart: [],
	totalPrice: 0,
};

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPES.ADD_PRODUCT_TO_CART:
			return {
				...state,
				cart: [...state.cart, action.payload],
			};
		case TYPES.DELETE_PRODUCT_FROM_CART:
			return {
				...state,
				cart: state.cart.filter((product) => product.id !== action.payload),
			};
		case TYPES.DELETE_ALL_FROM_CART:
			return {
				...state,
				cart: [],
			};
		case TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART:
			return {
				...state,
				totalPrice: action.payload,
			};
		case TYPES.ADD_NEW_ITEM_TO_CART:
			return {
				...state,
				cart: [...state.cart, action.payload],
			};
		default:
			return state;
	}
};
