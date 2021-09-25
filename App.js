import React from "react";
import { enableScreens } from "react-native-screens";

import AmazonNavigator from "./app/navigations/AmazonNavigator";

enableScreens();

export default function App() {
  return <AmazonNavigator />;
}
