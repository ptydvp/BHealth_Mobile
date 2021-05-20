import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import {
  ProfileStackNavigator,
  FavouriteStackNavigator,
} from "./StackNavigator";

import BottomTabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{ activeTintColor: "orange" }}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen
        name="หน้าหลัก"
        component={BottomTabNavigator}
        options={{
          drawerIcon: ({ tintcolor }) => (
            // <Ionicons name="ios-home" size={24} color={tintcolor} />
            <Image
              source={require("../assets/pic/home.png")}
              style={{ width: 30, height: 30 }}
            ></Image>
          ),
        }}
      />
      <Drawer.Screen
        name="ข้อมูลส่วนตัว"
        component={ProfileStackNavigator}
        options={{
          drawerIcon: ({ tintcolor }) => (
            // <Ionicons name="ios-contact" size={24} color={tintcolor} />
            <Image
              source={require("../assets/pic/user.png")}
              style={{ width: 30, height: 30 }}
            ></Image>
          ),
        }}
      />
      <Drawer.Screen
        name="เมนูโปรด"
        component={FavouriteStackNavigator}
        options={{
          drawerIcon: ({ tintcolor }) => (
            // <Ionicons name="md-heart" size={24} color={tintcolor} />
            <Image
              source={require("../assets/pic/heart.png")}
              style={{ width: 30, height: 30 }}
            ></Image>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
