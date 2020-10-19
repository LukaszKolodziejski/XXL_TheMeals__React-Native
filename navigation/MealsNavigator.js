import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import Colors from "../constants/Colors";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.primatyColor,
  },
  headerTintColor: "#fff",
};

// ---------- createStackNavigator ----------

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  { defaultNavigationOptions }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  { defaultNavigationOptions }
);

const FiltersNavigator = createStackNavigator(
  {
    Filters: {
      screen: FiltersScreen,
      navigationOptions: { headerTitle: "Filter Meals" },
    },
  },
  { defaultNavigationOptions }
);

// ---------- createBottomTabNavigator ----------

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        ),
      },
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
        ),
        tabBarLabel: "Favorites !!!",
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontSize: 13,
      },
    },
  }
);

// ---------- createDrawerNavigator ----------

const MainNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontSize: 18,
      },
    },
  }
);

export default createAppContainer(MainNavigator);
