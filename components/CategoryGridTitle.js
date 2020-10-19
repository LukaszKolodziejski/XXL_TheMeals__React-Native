import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CategoryGridTitle = (props) => {
  const { id, title, color, onSelect } = props;
  return (
    <TouchableOpacity key={id} style={styles.gridItem} onPress={onSelect}>
      <Text style={{ color, fontWeight: "700", fontSize: 16 }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryGridTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    height: 150,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#555",
  },
});
