import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  const { data } = props;
  const image = { uri: data.imageUrl };
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal} activeOpacity={0.8}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground source={image} style={styles.image}>
              <Text style={styles.title}>{data.title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{data.duration}m</Text>
            <Text>{data.complexity.toUpperCase()}</Text>
            <Text>{data.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    width: "100%",
    height: 220,
    backgroundColor: "#ccc",
    marginBottom: 30,
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "91%",
    justifyContent: "center",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-evenly",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontWeight: "700",
    fontSize: 22,
    color: "white",
    backgroundColor: "#0007",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
});
