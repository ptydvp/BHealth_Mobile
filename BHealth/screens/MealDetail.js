import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { MEALS } from "../data/BHealth-data";
import MealItem from "../components/MealItem";
import firebase, { firestore } from "firebase";
import { Ionicons } from "@expo/vector-icons";

import "@firebase/firestore";
import "@firebase/auth";

const MealDetail = (props) => {
  const detailId = props.route.params.id;
  const selectedMeal = MEALS.find((m) => m.id === detailId);
  const Ingredients = selectedMeal.ingredients.map((ele) => {
    return (
      <Text style={styles.text}>
        {"- "}
        {ele}
      </Text>
    );
  });
  const Steps = selectedMeal.step.map((ste) => {
    return <Text style={styles.text2}>{ste}</Text>;
  });

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      title: selectedMeal.title,
    });
  });

  const MealId = props.route.params.id;
  const user = firebase.auth().currentUser;
  const db = firebase.firestore();
  const [isFavourite, setFavourite] = useState(false);
  console.log("MealId : " + MealId);

  useEffect(() => {
    const db = firebase.firestore();
    const ref = db.collection("Favourite").doc(user.uid);
    const unsub = ref.onSnapshot((s) => {
      if (s.exists && s.data().Fav.includes(MealId)) {
        setFavourite(true);
      } else setFavourite(false);
    });
    return () => {
      unsub();
    };
  }, []);

  const handlerAddFav = async () => {
    const ref = db.collection("Favourite").doc(user.uid);

    const doc = await ref.get();
    if (doc.exists && doc.data().Fav.includes(MealId)) {
      await ref.set(
        {
          Fav: firestore.FieldValue.arrayRemove(MealId),
        },
        { merge: true }
      );
    } else {
      await ref.set(
        {
          Fav: firestore.FieldValue.arrayUnion(MealId),
        },
        { merge: true }
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.box}>
            <TouchableOpacity style={styles.buttonFav} onPress={handlerAddFav}>
              <Ionicons
                name={isFavourite ? "ios-heart" : "md-heart-empty"}
                size={40}
                color="red"
              />
              {/* <Image
                source={
                  isFavourite
                    ? require("../assets/pic/heart.png")
                    : require("../assets/pic/fav.png")
                }
                style={{width:40, height:40}}
              ></Image> */}
            </TouchableOpacity>

            <Text style={styles.title}>{selectedMeal.title}</Text>
            <Text style={styles.text1}>{selectedMeal.calories}</Text>
            <View style={styles.box1}>
              <Text style={styles.title1}>ส่วนผสม</Text>
              {Ingredients}
              <Text style={styles.title1}>วิธีทำ</Text>
              {Steps}
              <View style={{ marginTop: 30 }}></View>
            </View>
          </View>
          <Image
            source={selectedMeal.imageUrl}
            style={styles.imageLogo}
          ></Image>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff8cd",
  },
  imageLogo: {
    height: 160,
    width: 160,
    alignSelf: "center",
    position: "absolute",
  },
  box: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#FF9642",
    alignSelf: "center",
    marginTop: 100,
  },
  box1: {
    width: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#FFE05D",
    height: "100%",
    alignSelf: "center",
    marginTop: 15,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  title1: {
    marginTop: 25,
    marginLeft: 40,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    marginHorizontal: 60,
  },
  text1: {
    marginTop: 5,
    textAlign: "center",
  },
  text2: {
    marginHorizontal: 60,
    marginTop: 10
  },
  buttonFav: {
    marginLeft: 300,
    marginTop: 20,
  },
});

export default MealDetail;
