import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import Colors from "../constants/Colors";
import { Platform } from "react-native";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";



const ProductsNavigator = createStackNavigator(
	{
		productsOverview: ProductsOverviewScreen,
		productDetail : ProductDetailScreen,
		Cart : CartScreen
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === "android" ? Colors.primary : ""
			},
			headerTitleStyle: {
				fontFamily: 'open-sans-bold'
			},
			headerBackTitleStyle: {
				fontFamily: 'open-sans'
			},
			headerTintColor: Platform.OS === "android" ? "#ffffff" : Colors.primary
		}
	}
);

export default createAppContainer(ProductsNavigator);
