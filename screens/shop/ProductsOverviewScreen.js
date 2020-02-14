import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import ProductDetailScreen from "./ProductDetailScreen";

const ProductsOverviewScreen = props => {
	const products = useSelector(state => state.products.availableProducts);
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
					onAddToCard={() => {}}
				/>
			)}
		/>
	);
};

ProductsOverviewScreen.navigationOptions = {
	headerTitle: "All products"
};

export default ProductsOverviewScreen;
