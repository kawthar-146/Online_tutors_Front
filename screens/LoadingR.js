import React, { Component, useEffect, useState } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import LottieView from "lottie-react-native";

export default function Loading({ navigation }) {
  const closeActivityIndicator = () => {
    setTimeout(() => {
      navigation.navigate("Profiles");
    }, 2000);
  };

  useEffect(() => closeActivityIndicator());

  return (
    <View style={styles.container}>
     <Text
        style={styles.textL}
      >
        WELCOME 
      </Text>
      <LottieView
        source={require("../assets/lf20_aytbvjuy.json")}
        style={styles.lottie}
        autoPlay
        loop={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
  },
  activityIndicator: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },
  lottie: {
    height: '100%',
    // position:"absolute",
    // top:"5%",
  },
  textL:{
    
      fontWeight: "bold",
      fontSize: 28,
      color: "#D8BFD8",
      textAlign: "center",
      position:'relative',
      top:"35%",
      marginTop: "20%",
    }
  
});
