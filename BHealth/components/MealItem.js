import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const MealItem = (props) => {
  return (
    <View style={styles.center}>
      <View style={styles.cardsWrapper}>
        {/* กดแล้วไปหน้า Detail ของเมนูนั้นๆ */}
        <TouchableOpacity onPress={() => props.onSelect()}>
          <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
              <Image
                source={props.imageUrl}
                resizeMode="cover"
                style={styles.cardImg}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{props.title}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
  },
  cardsWrapper: {
    marginTop: 10,
    width: "80%",
    alignSelf: "center",
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 15,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: "#FFE05D",
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "#FFE05D",
  },
  cardTitle: {
    fontWeight: "bold",
    marginTop: 26,
  },
});

export default MealItem;
