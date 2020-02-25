import React from "react";
import { StyleSheet, Platform, Text, Button, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../../components/UI/headerButton";


const EditProductScreen = props => {

	return (
        <View>
            <Text>Edit product</Text>
        </View>
    )
};

const styles = StyleSheet.create({

});

EditProductScreen.navigationOptions = navData => {
	return {
		headerTitle: "Edit product",
		headerRight: () => {
			return (
				<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
					<Item
						title="Save"
						iconName={Platform.OS === "android" ? "md-save" : "ios-save"}
						onPress={() => {
							console.log('save pressed')
						}}
					/>
				</HeaderButtons>
			);
		}
	};
};

export default EditProductScreen;