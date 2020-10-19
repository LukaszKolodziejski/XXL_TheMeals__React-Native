import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View, FlatList } from "react-native";
import MealItem from "./MealItem";

const MealList = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  const renderItem = ({ item }) => {
    const isFavorite = favoriteMeals.some((meal) => meal.id === item.id);
    return (
      <MealItem
        data={item}
        onSelectMeal={() =>
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: item.id,
              mealTitle: item.title,
              starActive: isFavorite,
            },
          })
        }
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },
});
