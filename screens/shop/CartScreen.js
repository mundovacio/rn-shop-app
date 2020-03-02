import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import CartItem from "../../components/shop/CartItem";
import Card from "../../components/UI/Card";
import * as cartActions from "../../store/actions/cart";
import * as ordersActions from "../../store/actions/order";

const CartScreen = props => {
	const dispatch = useDispatch();
	const cartTotalAmount = useSelector(state => state.cart.totalAmount);
	const cartItems = useSelector(state => {
		const transformedCartItems = [];

		for (const key in state.cart.items) {
			transformedCartItems.push({
				productId: key,
				productTitle: state.cart.items[key].productTitle,
				productPrice: state.cart.items[key].productPrice,
				quantity: state.cart.items[key].quantity,
				sum: state.cart.items[key].sum
			});
		}

		return transformedCartItems.sort((a, b) =>
			a.productId > b.productId ? 1 : -1
		);
	});

	return (
		<View style={styles.screen}>
			<Card style={styles.summary}>
				<Text style={styles.summaryText}>
					Total:{" "}
					<Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
				</Text>
				<Button
					title="Order Now"
					color={Colors.accent}
					disabled={cartItems.length === 0}
					onPress={() => {
						dispatch(ordersActions.addOrder(cartItems, cartTotalAmount));
					}}
				/>
			</Card>

			<FlatList
				data={cartItems}
				keyExtractor={item => item.productId}
				renderItem={itemData => (
					<CartItem
						quantity={itemData.item.quantity}
						title={itemData.item.productTitle}
						deletable={true}
						onRemove={() => {
							dispatch(cartActions.removeFromCart(itemData.item.productId));
						}}
						amount={itemData.item.sum}
					/>
				)}
			></FlatList>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		margin: 20
	},
	summary: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		margin: 20,
		padding: 10,
		overflow: "hidden"
	},
	summaryText: {
		fontFamily: "open-sans-bold",
		fontSize: 18
	},
	amount: {
		color: Colors.primary
	}
});

CartScreen.navigationOptions = {
	headerTitle: "Your Cart"
};

export default CartScreen;
