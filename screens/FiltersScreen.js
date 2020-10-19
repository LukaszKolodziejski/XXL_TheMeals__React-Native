import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/meals";
import CustomHeaderButton from "../components/CustomHeaderButton";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.option}>{props.label}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#f75707" }}
        thumbColor={"#d4d3d4"}
        onValueChange={props.onChange}
        value={props.state}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const filterHandler = (setFilter) => setFilter((prevState) => !prevState);

  const dispatch = useDispatch();

  const saveAllFilters = useCallback(() => {
    const appliedFilters = {
      isGlutenFree,
      isVegan,
      isVegetarian,
      isLactoseFree,
    };
    // console.log(appliedFilters);
    dispatch(setFilters(appliedFilters));
  }, [dispatch, isGlutenFree, isVegan, isVegetarian, isLactoseFree]);
  // }, [isGlutenFree, isVegan, isVegetarian, isLactoseFree]);

  useEffect(() => {
    navigation.setParams({ save: saveAllFilters });
  }, [saveAllFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={() => filterHandler(setIsGlutenFree)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={() => filterHandler(setIsVegan)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={() => filterHandler(setIsVegetarian)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={() => filterHandler(setIsLactoseFree)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  const save = navData.navigation.getParam("save");
  return {
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Menu" iconName="ios-save" iconSize={30} onPress={save} />
      </HeaderButtons>
    ),
  };
};

export default FiltersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    margin: 20,
  },
  option: {
    fontSize: 15,
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    marginVertical: 12,
  },
});
