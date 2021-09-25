import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { AppearanceProvider } from "react-native-appearance";

import HomeStack from "./HomeStack";

const AmazonNavigator = () => {
  return (
    <AppearanceProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <HomeStack />
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default AmazonNavigator;
