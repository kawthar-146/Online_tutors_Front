import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

// import { useFonts, Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { LinearGradient } from "expo-linear-gradient";

import LottieView from "lottie-react-native";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <View style={styles.backg}  > */}
      <LottieView
        source={require("../assets/lf20_sebu9woj.json")}
        style={styles.lottie}
        autoPlay
        loop={true}
      />
      {/* </View> */}
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.container2}>
        <TextInput
          style={styles.body}
          placeholder="Full Name"
          
          // value={fullname}
          // onChangeText={(text) => setName(text)}
          // placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />

        <TextInput
          style={styles.body}
          placeholder="E-mail Address"
          // value={email}
          // onChangeText={(text) => setEmail(text)}
          // placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />

        <TextInput
          style={styles.body}
          placeholder="Password"
          secureTextEntry={true}
          // value={password}
          // onChangeText={(text) => setPassword(text)}
          // placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />

        <TextInput
          style={styles.body}
          placeholder="Confirm Password"
          secureTextEntry={true}
          // value={confirm_password}
          // onChangeText={(text) => setCpass(text)}
          // placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity  onPress={() => navigation.navigate('LoadingR')}>
          {/* <Text style={styles.btnText}>Login</Text> */}
          <LinearGradient
            // Button Linear Gradient
            colors={["#FFB695", "#FF3CBD"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.btn}
          >
            <Text style={styles.textb}>SIGN UP</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  container2: {
    // flex: 1,
    // justifyContent: "center",
    padding: 20,
    // alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.8)",
  },
  btn: {
    flex: 0.5,
  },

  title: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#34434D",
  },

  // content: {
  //   paddingLeft: 50,
  //   paddingRight: 50,
  //   textAlign: "center",
  //   fontSize: 15,
  //   color: "purple",
  // },
  // loginContainer: {
  //   width: "50%",
  //   backgroundColor: "pink",
  //   borderRadius: 20,
  //   padding: 10,
  //   marginTop: 30,
  // },
  loginText: {
    color: "white",
  },
  placeholder: {
    color: "red",
  },
  InputContainer: {
    // paddingStart: "5%",
    // marginTop: 20,
    borderRadius: 30,
    height: 50,
    width: "100%",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#db7093",
    borderRadius: 20,
  },
  body: {
    height: 42,
    borderWidth: 2,
    borderRadius: 6,
    width: 300,
    marginBottom: 10,
    borderColor: "navy",
    padding: 5,

    // paddingLeft: 20,
    // paddingRight: 20,
  },
  button: {
    backgroundColor: "#002F67",
    padding: 20,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  backg: {
    position: "absolute",
  },
  btn: {
    width: 300,

    // top:'50%',
    height: 50,
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "pink",
    padding: 10,
    borderRadius: 30,
  },
});
