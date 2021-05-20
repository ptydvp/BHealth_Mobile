import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";

const MealList = (props) => {
  const renderMealItem = (itemData) => {
    return (
      //เขียนโค้ดเพิ่ม
      <MealItem
        title={ itemData.item.title }
        image={ itemData.item.imageUrl }
        onPress={() => {
          props.navigation.navigate("MealDetail", {id:itemData.item.id, mealTitle:itemData.item.title});
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        //เขียนโค้ดเพิ่ม
        style={{ width: "100%" }}
        data={ props.listData }
        renderItem={ renderMealItem }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
