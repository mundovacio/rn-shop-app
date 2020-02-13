import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import Colors from "../constants/Colors";
import { Platform } from "react-native";

const ProductsNavigator = createStackNavigator(
	{
		productsOverview: ProductsOverviewScreen
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: Platform.OS === "android" ? Colors.primary : ""
			},
			headerTintColor: Platform.OS === "android" ? "#ffffff" : Colors.primary
		}
	}
);

export default createAppContainer(ProductsNavigator);
