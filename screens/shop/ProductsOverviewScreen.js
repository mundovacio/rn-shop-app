import React from "react";
import { FlatList, Platform , Button} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/UI/headerButton";
import Colors from "../../constants/Colors";

const ProductsOverviewScreen = props => {
	const products = useSelector(state => state.products.availableProducts);
	const dispatch = useDispatch();

	const selectItemHandler = (id, title) => {
		props.navigation.navigate("productDetail", {
			productId: id,
			productTitle: title
		});
	}

	return (
		<FlatList
			keyExtractor={item => item.id}
			data={products}
			renderItem={itemData => (
				<ProductItem
					imageUrl={itemData.item.imageUrl}
					title={itemData.item.title}
					price={itemData.item.price}
					onSelected = {() => {
						selectItemHandler(itemData.item.id, itemData.item.title)
					}}
				>
						<Button
							title="View Details"
							onPress={() => {
								selectItemHandler(itemData.item.id, itemData.item.title)
							}}
							color={Colors.primary}
						/>
						<Button
							title="To Cart"
							onPress={() => {
								dispatch(cartActions.addToCart(itemData.item));
							}}
							color={Colors.primary}
						/>
				</ProductItem>
			)}
		/>
	);
};

ProductsOverviewScreen.navigationOptions = navData => {
	return {
		headerTitle: "All products",
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
						title="Cart"
						iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
						onPress={() => {
							navData.navigation.navigate("Cart");
						}}
					/>
				</HeaderButtons>
			);
		}
	};
};

export default ProductsOverviewScreen;
