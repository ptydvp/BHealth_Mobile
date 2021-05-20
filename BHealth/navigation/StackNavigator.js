import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import BloodGroupMeal from "../screens/BloodGroupMeal";
import MealDetail from "../screens/MealDetail";
import Profile from "../screens/Profile";
import Favourite from "../screens/Favourite";
import Search from "../screens/Search";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

import DrawerNavigator from "./DrawerNavigator";
import Icon from "react-native-vector-icons";
import { Ionicons } from "@expo/vector-icons";

const MainStack = createStackNavigator();
const BloodStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const FavStack = createStackNavigator();
const SearchStack = createStackNavigator();
const LoginStack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#FF9642",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = (props) => {
  return (
    <MainStack.Navigator screenOptions={screenOptionStyle}>
      {/* <MainStack.Screen name="Login" component={LoginScreen} /> */}
      {/* <MainStack.Screen name="Register" component={RegisterScreen} /> */}
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          title: "กินอะไรดี",
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={25}
              backgroundColor="#9AC4F8"
              color="white"
              onPress={() => props.navigation.openDrawer()}
              style={{ marginLeft: 12 }}
            ></Ionicons>
          ),
          headerRight: () => (
            <Ionicons
              name="ios-search"
              size={24}
              backgroundColor="#9AC4F8"
              color="white"
              style={{ marginRight: 12 }}
              onPress={() => props.navigation.navigate("Search")}
            />
          ),
        }}
      />
      <MainStack.Screen name="MealDetail" component={MealDetail} />
      <MainStack.Screen
        name="Search"
        component={Search}
        options={{ title: "กินอะไรดี" }}
      />
    </MainStack.Navigator>
  );
};

const BloodGroupMealStackNavigator = (props) => {
  return (
    <BloodStack.Navigator screenOptions={screenOptionStyle}>
      <BloodStack.Screen
        name="BloodGroupMeal"
        component={BloodGroupMeal}
        options={{
          title: "กินตามกรุ๊ปเลือด",
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={25}
              backgroundColor="#9AC4F8"
              color="white"
              onPress={() => props.navigation.openDrawer()}
              style={{ marginLeft: 12 }}
            ></Ionicons>
          ),
        }}
      />
      <BloodStack.Screen name="MealDetail" component={MealDetail} />
    </BloodStack.Navigator>
  );
};
const SearchStackNavigator = (props) => {
  return (
    <SearchStack.Navigator screenOptions={screenOptionStyle}>
      <SearchStack.Screen
        name="Search"
        component={Search}
        options={{
          title: "Profile",
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={25}
              backgroundColor="#9AC4F8"
              color="white"
              onPress={() => props.navigation.openDrawer()}
              style={{ marginLeft: 12 }}
            ></Ionicons>
          ),
        }}
      />
    </SearchStack.Navigator>
  );
};
const ProfileStackNavigator = (props) => {
  return (
    <ProfileStack.Navigator screenOptions={screenOptionStyle}>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "ข้อมูลส่วนตัว",
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={25}
              backgroundColor="#9AC4F8"
              color="white"
              onPress={() => props.navigation.openDrawer()}
              style={{ marginLeft: 12 }}
            ></Ionicons>
          ),
        }}
      />
      <ProfileStack.Screen
        name="Login"
        component={LoginStackNavigator}
        options={{ headerShown: false }}
      ></ProfileStack.Screen>
      <ProfileStack.Screen
        name="Home"
        component={DrawerNavigator}
      ></ProfileStack.Screen>
    </ProfileStack.Navigator>
  );
};

const FavouriteStackNavigator = (props) => {
  return (
    <FavStack.Navigator screenOptions={screenOptionStyle}>
      <FavStack.Screen
        name="Favourite"
        component={Favourite}
        options={{
          title: "เมนูโปรด",
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={25}
              backgroundColor="#9AC4F8"
              color="white"
              onPress={() => props.navigation.openDrawer()}
              style={{ marginLeft: 12 }}
            ></Ionicons>
          ),
        }}
      />
      <FavStack.Screen name="MealDetail" component={MealDetail} />
    </FavStack.Navigator>
  );
};

const LoginStackNavigator = (props) => {
  return (
    <LoginStack.Navigator headerMode="none" initialRouteName="Login">
      <LoginStack.Screen name="Login" component={LoginScreen} />
      <LoginStack.Screen name="Register" component={RegisterScreen} />
      <LoginStack.Screen name="Home" component={DrawerNavigator} />
    </LoginStack.Navigator>
  );
};

export {
  MainStackNavigator,
  BloodGroupMealStackNavigator,
  SearchStackNavigator,
  ProfileStackNavigator,
  FavouriteStackNavigator,
  LoginStackNavigator,
};
