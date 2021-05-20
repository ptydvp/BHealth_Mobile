import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/BHealth-data";

import firebase from "firebase";
import "@firebase/firestore";
import "@firebase/auth";

const BloodGroupMeal = (props) => {
  const [filterMeal, setFilterMeal] = useState([]);

  useEffect(() => {
    const user = firebase.auth().currentUser;
    const db = firebase.firestore();
    const ref = db.collection("userProfile").doc(user.uid);
    const unsub = ref.onSnapshot((snapshot) => {
      const info = snapshot.data();
      let bgMeal;
      if (snapshot.exists && info && info.bgroup)
        bgMeal = MEALS.filter((m) => m.bloodgroup == info.bgroup);
      else bgMeal = [];
      setFilterMeal(bgMeal);
    });
    return () => {
      unsub();
    };
  }, []);

  // const bgMeal = MEALS.find((m)=> m.bloodgroup == '')
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
      <FlatList data={filterMeal} renderItem={renderItem} />
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
});

export default BloodGroupMeal;
