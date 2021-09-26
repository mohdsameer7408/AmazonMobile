import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";

import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerBackground: () => (
          <LinearGradient
            colors={["#39c6c6", "#26d9d9", "#66ffd9", "#99ffe6"]}
            style={{ flex: 1 }}
            start={[0.1, 0.1]}
            end={[0.5, 0.2]}
          />
        ),
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: "Home",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
