import { ADD_ORDER } from "../actions/order";
import Order from "../../models/Order";

const initiaState = {
	orders: []
};

export default (state = initiaState, action) => {
	switch (action.type) {
		case ADD_ORDER:
			const newOrder = new Order(
				new Date().toString(),
				action.orderData.items,
				action.orderData.amount,
				new Date()
			);
			
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            }
	}
	return state;
};
