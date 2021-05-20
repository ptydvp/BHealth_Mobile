import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  MainStackNavigator,
  BloodGroupMealStackNavigator,
} from "./StackNavigator";

import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import BloodGroupMeal from "../screens/BloodGroupMeal";
import { Image } from "react-native";
const Tab = createMaterialTopTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "orange",
        inactiveTintColor: "blue",
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: "#fff" },
        showIcon: true,
        tabStyle: {},
      }}
      tabBarPosition="bottom"
    >
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarLabel: "กินอะไรดี",
          // tabBarIcon: () => <Ionicons name="ios-egg" size={24} color="black" />,
          tabBarIcon: () => (
            <Image
              source={require("../assets/pic/question.png")}
              style={{ width: 30, height: 30 }}
            ></Image>
          ),
        }}
      />

      <Tab.Screen
        name="BloodGroupMeal"
        component={BloodGroupMealStackNavigator}
        options={{
          tabBarLabel: "กินตามกรุ๊ปเลือด",
          tabBarIcon: () => (
            // <Ionicons name="md-pulse" size={24} color="black" />
            <Image
              source={require("../assets/pic/blood-donation.png")}
              style={{ width: 30, height: 30 }}
            ></Image>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
