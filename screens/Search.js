import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";

export default function Search() {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.header,
          {
            width,
            height: width / 4,
          },
        ]}
      >
        <Text style={styles.headerTitle}>Search Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#fddeaf",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    marginBottom: "5%",
  },
});
