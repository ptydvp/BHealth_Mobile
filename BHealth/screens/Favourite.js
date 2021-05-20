import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/BHealth-data";
import firebase from "firebase";
import "@firebase/firestore";
import "@firebase/auth";

const Favourite = (props) => {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    const user = firebase.auth().currentUser;
    const db = firebase.firestore();
    const ref = db.collection("Favourite").doc(user.uid);
    const unsub = ref.onSnapshot(s => {
      console.log(user.uid)
      console.log(s.data())
  
      const favMeal = MEALS.filter(m => s.data().Fav.includes(m.id));
      setFav(favMeal);
    })
    return () => { unsub() }
  }, []);

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
  return <FlatList data={fav} renderItem={renderItem}></FlatList>;
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Favourite;
