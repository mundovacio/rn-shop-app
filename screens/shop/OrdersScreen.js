import React from "react";
import { View, Text, StyleSheet, FlatList, Button, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/UI/headerButton";

const OrdersScreen = props => {
	const orders = useSelector(state => state.orders.orders);

	return (
		<FlatList
			data={orders}
			keyExtractor={item => item.id}
			renderItem={itemData => <Text>${itemData.item.totalAmount.toFixed(2)}</Text>}
		/>
	);
};

const styles = StyleSheet.create({
	screen: {
		margin: 20
	}
});

OrdersScreen.navigationOptions = navData => {
	return {
		headerTitle: "Your orders",
		headerLeft: () => {
			return (
				<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
					<Item
						title="Menu"
						iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
						onPress={() => {
							navData.navigation.toggleDrawer();
						}}
					/>
				</HeaderButtons>
			);
		}
	};
};

export default OrdersScreen;
