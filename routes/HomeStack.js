import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Loading from "../screens/Loading";
import LoginParent from "../screens/LoginParent";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function HomeStack({ initialRoute = "Loading" }) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LoginParent" component={LoginParent}/>
        {/* <Stack.Screen name="TextInANest" component={TextInANest}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
