import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import MealList from "../components/MealList";

const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  const fullFavList = <MealList {...props} listData={favMeals} />;
  const emptyFavList = (
    <View style={styles.screen}>
      <View style={styles.emptyList}>
        <Text style={styles.text}>{"Choose your favorite meals :)"}</Text>
      </View>
    </View>
  );
  const mealList = favMeals.length ? fullFavList : emptyFavList;
  return mealList;
};

FavoritesScreen.navigationOptions = (navData) => ({
  headerTitle: "Your Favorites",
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

export default FavoritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyList: {
    borderWidth: 3,
    borderColor: "#05ab3a",
    borderRadius: 10,
    padding: 12,
  },
  text: {
    fontSize: 20,
  },
});
