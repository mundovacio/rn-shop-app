import React from "react";
import { StyleSheet, Platform, FlatList, Button } from "react-native";
import ProductItem from "../../components/shop/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/UI/headerButton";
import Colors from "../../constants/Colors";
import * as productActions from "../../store/actions/products";

const UserProductScreen = props => {
	const userProducts = useSelector(state => state.products.userProducts);
	const dispatch = useDispatch();

	const editProductHandler = (id) => {
		props.navigation.navigate('EditProduct', {productId: id});
	}

	return (
		<FlatList
			data={userProducts}
			keyExtractor={item => item.id}
			renderItem={itemData => (
				<ProductItem
					imageUrl={itemData.item.imageUrl}
					title={itemData.item.title}
					price={itemData.item.price}
					onSelected={() => {
						editProductHandler(itemData.item.id);
					}}
				>
					<Button title="Edit" onPress={() => {
						editProductHandler(itemData.item.id);
					}} color={Colors.primary} />
					<Button
						title="Delete"
						onPress={() => {
							dispatch(productActions.deleteProduct(itemData.item.id));
						}}
						color={Colors.primary}
					/>
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
		},
		headerRight: () => {
			return (
				<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
					<Item
						title="Add"
						iconName={Platform.OS === "android" ? "md-create" : "ios-create"}
						onPress={() => {
							navData.navigation.navigate('EditProduct');
						}}
					/>
				</HeaderButtons>
			);
		}
	};
};

export default UserProductScreen;
