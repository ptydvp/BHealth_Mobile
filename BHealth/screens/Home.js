import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";

import { CATEGORIES, MEALS } from "../data/BHealth-data";

import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
import firebase from "firebase";
import "@firebase/auth";

const Home = (props) => {
  console.log(firebase.auth().currentUser);
  const user = firebase.auth().currentUser;
  if (user == null) {
    props.navigation.navigate("Login");
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
      <FlatList data={MEALS} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    marginTop: 32,
    alignItems: "center",
    textAlign: "center",
  },
});

export default Home;
