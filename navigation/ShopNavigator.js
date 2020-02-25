import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import Colors from "../constants/Colors";
import { Platform } from "react-native";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import UserProductScreen from "../screens/user/UserProducstScreen";

const defaultNavOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === "android" ? Colors.primary : ""
	},
	headerTitleStyle: {
		fontFamily: "open-sans-bold"
	},
	headerBackTitleStyle: {
		fontFamily: "open-sans"
	},
	headerTintColor: Platform.OS === "android" ? "#ffffff" : Colors.primary
};

const ProductsNavigator = createStackNavigator(
	{
		productsOverview: ProductsOverviewScreen,
		productDetail: ProductDetailScreen,
		Cart: CartScreen
	},
	{
		navigationOptions: {
			drawerIcon: drawerConfig => (
				<Ionicons
					name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
					size={23}
					color={drawerConfig.tintColor}
				/>
			)
		},
		defaultNavigationOptions: defaultNavOptions
	}
);

const OrdersNavigator = createStackNavigator(
	{
		Orders: OrdersScreen
	},
	{
		navigationOptions: {
			drawerIcon: drawerConfig => (
				<Ionicons
					name={Platform.OS === "android" ? "md-list" : "ios-list"}
					size={23}
					color={drawerConfig.tintColor}
				/>
			)
		},
		defaultNavigationOptions: defaultNavOptions
	}
);

const AdminNavigator = createStackNavigator(
	{
		userProducts: UserProductScreen
	},
	{
		navigationOptions: {
			drawerIcon: drawerConfig => (
				<Ionicons
					name={Platform.OS === "android" ? "md-create" : "ios-create"}
					size={23}
					color={drawerConfig.tintColor}
				/>
			)
		},
		defaultNavigationOptions: defaultNavOptions
	}
);

const shopNavigator = createDrawerNavigator(
	{
		Products: ProductsNavigator,
		Orders: OrdersNavigator,
		Admin: AdminNavigator
	},
	{
		contentOptions: {
			activeTintColor: Colors.primary
		}
	}
);

export default createAppContainer(shopNavigator);
