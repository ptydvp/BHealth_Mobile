import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./navigation/DrawerNavigator";
import { MainStackNavigator, SwitchStackNavigator } from "./navigation/StackNavigator";
import BottomTabNavigator from './navigation/TabNavigator';
import { LoginStackNavigator } from './navigation/StackNavigator';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAnxlTJlvB7pYGgeOpvDtO7Jo11jUrm7FM",
  authDomain: "bhealthproject.firebaseapp.com",
  databaseURL: "https://bhealthproject.firebaseio.com",
  projectId: "bhealthproject",
  storageBucket: "bhealthproject.appspot.com",
  messagingSenderId: "648529376052",
  appId: "1:648529376052:web:a81eb627ae53da93c7eb61",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <NavigationContainer>
      {/* <MainStackNavigator /> */}
      {/* <BottomTabNavigator/> */}
      {/* <DrawerNavigator/> */}
      <LoginStackNavigator/>
    </NavigationContainer>
  );
};
export default App;