import { auth, firestore } from "firebase";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import firebase from "firebase";
import "@firebase/firestore";
import "@firebase/auth";

const Profile = (props) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");
  const [bgroup, setBgroup] = useState("");

  useEffect(() => {
    const didMount = async () => {
      const user = firebase.auth().currentUser;
      const db = firebase.firestore();
      const ref = db.collection("userProfile").doc(user.uid);
      const doc = await ref.get();
      setFname(doc.data().fname || "");
      setLname(doc.data().lname || "");
      setAge(doc.data().age || "");
      setBgroup(doc.data().bgroup || "");
    };
    didMount();
  }, []);

  const db = firebase.firestore();

  // const profileId = firebase.auth().currentUser.uid;

  const handlerSubmit = () => {
    const user = firebase.auth().currentUser;
    db.collection("userProfile")
      .doc(user.uid)
      .set(
        {
          fname: fname,
          lname: lname,
          age: age,
          bgroup: bgroup.toUpperCase(),
        },
        { merge: true }
      )
      .then(() => {
        alert("บันทึกข้อมูลเรียบร้อย!!");
      });
  };
  const logoutHandler = () => {
    firebase.auth().signOut().then(props.navigation.navigate("Login"));
  };

  return (
    <View style={styles.center}>
      <View style={styles.box}>
        <View style={styles.form}>
          <View>
            <TextInput
              style={styles.input}
              value={fname}
              onChangeText={setFname}
              placeholder="ชื่อ"
              placeholderTextColor="orange"
            ></TextInput>
          </View>
          <View>
            <TextInput
              style={styles.input}
              value={lname}
              onChangeText={setLname}
              placeholder="นามสกุล"
              placeholderTextColor="orange"
            ></TextInput>
          </View>
          <View style={styles.placeholderRow}>
            <View>
              <TextInput
                style={styles.input1}
                value={age}
                onChangeText={setAge}
                placeholder="อายุ"
                placeholderTextColor="orange"
              ></TextInput>
            </View>
            <View>
              <TextInput
                style={styles.input2}
                value={bgroup.toUpperCase()}
                onChangeText={setBgroup}
                placeholder="กรุ๊ปเลือด"
                placeholderTextColor="orange"
              ></TextInput>
            </View>
          </View>
          <View style={{ marginTop: 100 }}>
            <TouchableOpacity style={styles.button} onPress={handlerSubmit}>
              <Text style={{ color: "#FFF", fontWeight: "500" }}>ยืนยัน</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1} onPress={logoutHandler}>
              <Text style={{ color: "#FFF", fontWeight: "500" }}>
                ออกจากระบบ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Image
        source={require("../assets/logo.png")}
        style={styles.image}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
  },
  box: {
    width: "100%",
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    backgroundColor: "#fff8cd",
    height: "90%",
    alignSelf: "center",
    marginTop: 80,
    position: "absolute",
  },
  image: {
    width: 155,
    height: 155,
    position: "absolute",
    alignSelf: "center",
    marginTop: 20,
  },
  input: {
    borderColor: "#ff9642",
    marginBottom: 20,
    borderRadius: 18,
    borderWidth: 2,
    height: 50,
    fontSize: 20,
    color: "#161F3D",
    paddingLeft: 20
  },
  input1: {
    borderColor: "#ff9642",
    marginBottom: 20,
    borderRadius: 18,
    borderWidth: 2,
    height: 50,
    width: 160,
    fontSize: 20,
    color: "#161F3D",
    paddingLeft: 20
  },
  input2: {
    borderColor: "#ff9642",
    marginBottom: 20,
    marginLeft: 19,
    borderRadius: 18,
    borderWidth: 2,
    height: 50,
    width: 160,
    fontSize: 20,
    color: "#161F3D",
    paddingLeft: 20
  },
  form: {
    marginHorizontal: 20,
    marginTop: 140,
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "gray",
    borderRadius: 30,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  button1: {
    marginHorizontal: 30,
    backgroundColor: "gray",
    borderRadius: 30,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  placeholderRow: {
    flexDirection: "row",
    flex: 1,
  },
});

export default Profile;
