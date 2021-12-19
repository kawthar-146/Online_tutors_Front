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
import { LinearGradient } from 'expo-linear-gradient';

import LottieView from "lottie-react-native";

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/animation.json")}
        style={styles.lottie}
        autoPlay
        loop={true}
      />
      <View style={{ paddingBottom: 100 }}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subtitle}>Sign in to your account</Text>
      </View>
      <View style={{ backgroundColor: "transparent" }}></View>
      <View style={styles.Inputs}>
        <TextInput placeholder="Parent@gmail.com" style={styles.TextInput} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.TextInput}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Profiles') }>
          {/* <Text style={styles.btnText}>Login</Text> */}
          <LinearGradient
        // Button Linear Gradient
        colors={[ '#FFB695','#FF3CBD']}
        start={{x:1, y:0}}
        end={{x:0, y:1}}
        style={styles.btn}>

        <Text style={styles.textb} >SIGN IN</Text>
      </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => navigation.navigate('RegisterParent')}>
        <Text style={styles.acc}>Don't have an account</Text></TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
   );
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 90,
    fontWeight: "bold",
    color: "#34434D",
  },
  subtitle: {
    fontSize: 20,
    color: "gray",
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "pink",
    paddingStart: "5%",
    width: "100%",
    marginTop: 20,
    borderRadius: 30,
    height: 50,
    backgroundColor: "#fff",
  },
  Inputs: {
    width: "80%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  btn: {
    width: "70%",
    position: 'relative',
    left:"14.5%",
    // top:'50%',
    height: 50,
    marginVertical: 8,
    alignItems:'center',
    justifyContent:'center',
    // backgroundColor: "pink",
    padding: 10,
    borderRadius: 20,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
  },
  textb: {
    fontSize: 20,
    color: 'gray',
    // marginTop: 20
    color:'#fff',
    fontWeight:'bold',
  },
  acc:{
  textAlign:"center", }
  
});
