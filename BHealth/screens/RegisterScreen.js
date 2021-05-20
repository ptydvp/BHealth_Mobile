import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

import firebase from "firebase";
import "@firebase/auth";

// const Register = (props) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const registerHanler = (e) => {
//     const doRegister = auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then((userCredntials) => {
//         return userCredntials.user.updateProfile({
//           displayName: name,
//         });
//       })
//       .catch((error) => setError({ errorMessage: error.message }))
//       .then(props.navigation.navigate("Login"));
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.box}>
//         <View style={styles.circle}>
//           <Text style={styles.greeting}>{"Sign Up"}</Text>
//         </View>
//         {/* <View style={styles.errorMessage}>
//           {{ error } && <Text style={styles.error}>{setError}</Text>}
//         </View> */}
//         <View style={styles.form}>
//           <View>
//             <Text style={styles.inputTitle}>Full Name</Text>
//             <TextInput
//               style={styles.input}
//               autoCapitalize="none"
//               onChangeText={setName}
//               value={name}
//             ></TextInput>
//           </View>
//           <View style={{ marginTop: 32 }}>
//             <Text style={styles.inputTitle}>Email Address</Text>
//             <TextInput
//               style={styles.input}
//               autoCapitalize="none"
//               onChangeText={setEmail}
//               value={email}
//             ></TextInput>
//           </View>

//           <View style={{ marginTop: 32 }}>
//             <Text style={styles.inputTitle}>Password</Text>
//             <TextInput
//               style={styles.input}
//               secureTextEntry
//               autoCapitalize="none"
//               onChangeText={setPassword}
//               value={password}
//             ></TextInput>
//           </View>

//           <TouchableOpacity style={styles.button} onPress={registerHanler}>
//             <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign Up</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={{ alignSelf: "center", marginTop: 32 }}
//             onPress={() => props.navigation.navigate("Login")}
//           >
//             <Text style={{ color: "#414959", fontSize: 13 }}>
//               New to BHealth App?{" "}
//               <Text style={{ fontWeight: "500", color: "#E9446A" }}>
//                 Log In
//               </Text>
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

export default class Register extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    errorMessage: null,
  };
  handleSingUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((userCredntials) => {
        // setBloodGroup เพิ่มเข้าไปด้วย
        return userCredntials.user
          .updateProfile({
            displayName: this.state.name,
          })
          .then(this.props.navigation.navigate("Login"));
      })
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
              <Text style={styles.inputTitle}>Full Name</Text>
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                onChangeText={(name) => this.setState({ name })}
                value={this.state.name}
              ></TextInput>
            </View>

            <View style={{ marginTop: 32 }}>
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

          <TouchableOpacity style={styles.button} onPress={this.handleSingUp}>
            <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignSelf: "center", marginTop: 20 }}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={{ color: "#414959", fontSize: 13 }}>
              Have an Account?{" "}
              <Text style={{ fontWeight: "500", color: "#E9446A" }}>
                Sign In
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.circle}>
          <Text style={styles.greeting}>{"Sign Up"}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  box: {
    backgroundColor: "#FF9642",
    borderRadius: 17,
    width: "90%",
    height: "75%",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
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
    marginTop: 80,
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
  form: {
    marginBottom: 30,
    marginHorizontal: 30,
    marginTop: 20,
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
    bottom: 250,
    alignSelf: "center",
  },
});

// export default Register;
