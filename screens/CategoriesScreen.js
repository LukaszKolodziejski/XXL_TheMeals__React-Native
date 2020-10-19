import React from "react";
import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import CategoryGridTitle from "../components/CategoryGridTitle";

const CategoriesScreen = (props) => {
  const renderItem = ({ item }) => (
    <CategoryGridTitle
      id={item.id}
      title={item.title}
      color={item.color}
      onSelect={() => {
        props.navigation.navigate({
          routeName: "CategoryMeals",
          params: {
            categoryID: item.id,
            title: item.title,
          },
        });
      }}
    />
  );

  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

CategoriesScreen.navigationOptions = (navData) => ({
  headerTitle: "Meal Categories",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        iconSize={40}
        onPress={() => navData.navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});

export default CategoriesScreen;
