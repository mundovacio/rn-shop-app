import React from "react";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from '../../store/actions/cart';

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

ProductsOverviewScreen.navigationOptions = {
	headerTitle: "All products"
};

export default ProductsOverviewScreen;
