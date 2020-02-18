import React from "react";
import { FlatList, Platform } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/UI/headerButton";

const ProductsOverviewScreen = props => {
	const products = useSelector(state => state.products.availableProducts);
	const dispatch = useDispatch();

	return (
		<FlatList
			keyExtractor={item => item.id}
			data={products}
			renderItem={itemData => (
				<ProductItem
					imageUrl={itemData.item.imageUrl}
					title={itemData.item.title}
					price={itemData.item.price}
					onViewDetail={() => {
						props.navigation.navigate("productDetail", {
							productId: itemData.item.id,
							productTitle: itemData.item.title
						});
					}}
					onAddToCard={() => {
						dispatch(cartActions.addToCart(itemData.item));
					}}
				/>
			)}
		/>
	);
};

ProductsOverviewScreen.navigationOptions = navData => {
	return {
		headerTitle: "All products",
		headerRight: () => {
			return (
				<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
					<Item
						title="Cart"
						iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
						onPress={() => {
							navData.navigation.navigate('Cart');
						}}
					/>
				</HeaderButtons>
			);
		}
	};
};

export default ProductsOverviewScreen;
