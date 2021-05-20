import React from "react";
import { View, StyleSheet, Text, TextInput, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/BHealth-data";
import MealItem from "../components/MealItem";
import Meals from "../models/meals";
import { SearchBar } from "react-native-elements";

const History = (props) => {
  const [search, updateSearch] = React.useState("");
  const [FilterFood, setFilter] = React.useState(MEALS);
  const [TexttoSeacrh, setTextto] = React.useState("กินอะไรดี");
  function updateFilter(text) {
    updateSearch(text);
    const searchfood = MEALS.filter((food) => food.title.includes(text));
    setFilter(searchfood);
    console.log(FilterFood);
  }
  const renderItem = (itemData) => {
    return (
      <MealItem
        id={itemData.item.id}
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        onSelect={() => {
          props.navigation.navigate("MealDetail", { id: itemData.item.id });
        }}
      />
    );
  };

  return (
    <View>
      <SearchBar
        placeholder="Search"
        onChangeText={(text) => updateFilter(text)}
        value={search}
        containerStyle={{
          backgroundColor: "#FF9642",
          borderWidth: 1,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderColor: "#FF9642",
          borderTopColor: "#FF9642",
        }}
        inputStyle={{
          backgroundColor: "white",
          borderRadius: 8,
          paddingLeft: 10
        }}
        inputContainerStyle={{ backgroundColor: "#FF9642", borderRadius: 8 }}
      />
      <FlatList data={FilterFood} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  box: {
    backgroundColor: "#FF9642",
    borderRadius: 17,
    width: "80%",
    height: "60%",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  boxTitle: {
    width: "60%",
    height: "15%",
    backgroundColor: "#FFE05D",
    alignSelf: "center",
    marginBottom: "130%",
    borderRadius: 10,
  },
});

export default History;
