import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

import firebase, { auth } from "firebase";
import "@firebase/auth";

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errorMessage: null,
  };

  componentDidMount = () => {
    const auth = firebase.auth();
    this.unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) this.props.navigation.navigate("Home");
    });
  };

  componentWillUnmount = () => {
    this.unsubscribe && this.unsubscribe();
  };

  handleLogin = () => {
    // const user = auth().currentUser;
    console.log(auth());
    console.log(firebase.auth().currentUser);
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.errorMessage}>
            {this.state.errorMessage && (
              <Text style={styles.error}>{this.state.errorMessage}</Text>
            )}
          </View>
          <View style={styles.form}>
            <View>
              <Text style={styles.inputTitle}>Email Address</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
              ></TextInput>
            </View>

            <View style={{ marginTop: 32 }}>
              <Text style={styles.inputTitle}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry
                autoCapitalize="none"
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
              ></TextInput>
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignSelf: "center", marginTop: 32 }}
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={{ color: "#414959", fontSize: 13 }}>
              New to BHealth App?{" "}
              <Text style={{ fontWeight: "500", color: "#E9446A" }}>
                Sign Up
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.circle}>
          <Text style={styles.greeting}>{"Sign In"}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  center: {
    justifyContent: "center",
  },
  box: {
    backgroundColor: "#FF9642",
    borderRadius: 17,
    width: "90%",
    height: "70%",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
  },
  greeting: {
    top: 55,
    fontSize: 32,
    fontWeight: "400",
    textAlign: "center",
    color: "white",
  },
  errorMessage: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
    marginTop: 70
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
    marginTop: 32,
  },
  inputTitle: {
    color: "white",
    fontSize: 14,
    textTransform: "uppercase",
  },
  input: {
    borderBottomColor: "white",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D",
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "gray",
    borderRadius: 30,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: "#FFE05D",
    bottom: 225,
    alignSelf: 'center'
  },
});

// export default Login;
