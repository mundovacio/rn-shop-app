import React from "react";
import { StyleSheet, Platform, FlatList, Button } from "react-native";
import ProductItem from "../../components/shop/ProductItem";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/UI/headerButton";
import Colors from "../../constants/Colors";

const UserProductScreen = props => {
	const userProducts = useSelector(state => state.products.userProducts);

	return (
		<FlatList
			data={userProducts}
			keyExtractor={item => item.id}
			renderItem={itemData => (
				<ProductItem
					imageUrl={itemData.item.imageUrl}
					title={itemData.item.title}
					price={itemData.item.price}
					onSelected={() => {}}
				>
					<Button title="Edit" onPress={() => {}} color={Colors.primary} />
					<Button title="Delete" onPress={() => {}} color={Colors.primary} />
				</ProductItem>
			)}
		/>
	);
};

const styles = StyleSheet.create({});

UserProductScreen.navigationOptions = navData => {
	return {
		headerTitle: "Your products",
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

export default UserProductScreen;
