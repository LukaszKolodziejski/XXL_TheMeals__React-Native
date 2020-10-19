import React from "react";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  const categoryID = props.navigation.getParam("categoryID");

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryID) >= 0
  );
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => ({
  headerTitle: navigationData.navigation.getParam("title"),
});

export default CategoryMealsScreen;
