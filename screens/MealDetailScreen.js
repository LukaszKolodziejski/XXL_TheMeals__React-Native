import React, { useEffect, useCallback } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { toggleFavorite } from "../store/actions/meals";

const ListItem = (props) => (
  <View style={styles.listItem}>
    <Text>{props.children}</Text>
  </View>
);

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const availableMeals = useSelector((state) => state.meals.meals);
  const currentMealIsFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );
  const mealDetail = availableMeals.find((meal) => meal.id === mealId);
  const image = { uri: mealDetail.imageUrl };

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ starActive: currentMealIsFavorite });
  }, [currentMealIsFavorite]);

  const ingredients = mealDetail.ingredients.map((ingredient, id) => (
    <ListItem key={id}>{ingredient}</ListItem>
  ));
  const steps = mealDetail.steps.map((step, id) => (
    <ListItem key={id}>
      {id + 1}: {step}
    </ListItem>
  ));
  return (
    <ScrollView>
      <Image source={image} style={styles.image} />
      <View style={styles.details}>
        <Text>{mealDetail.duration}m</Text>
        <Text>{mealDetail.complexity.toUpperCase()}</Text>
        <Text>{mealDetail.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {ingredients}
      <Text style={styles.title}>Steps</Text>
      {steps}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navData) => {
  const mealTitle = navData.navigation.getParam("mealTitle");
  const toggleFavorite = navData.navigation.getParam("toggleFav");
  const starActive = navData.navigation.getParam("starActive");

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={starActive ? "ios-star" : "ios-star-outline"}
          iconSize={23}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 6,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 15,
    padding: 6,
    paddingLeft: 12,
    backgroundColor: "#ccc5",
  },
  image: {
    width: "100%",
    height: 200,
  },
});
