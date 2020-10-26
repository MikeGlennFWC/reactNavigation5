import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AllScreenTabNavigator } from "./appTabNavigator";
import AllDrawerNavigation from "./appDrawerNavigator";
import ThirdScreenNavigation from "./appStackNavigator";

import { createStackNavigator } from "@react-navigation/stack";

const AllAppNavigation = createStackNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <AllAppNavigation.Navigator
      initialRouteName="tab"
      screenOptions={{
        header: () => null
      }}
    >
      <AllAppNavigation.Screen name="tab" children={AllScreenTabNavigator} />
      <AllAppNavigation.Screen name="stack" children={ThirdScreenNavigation} />
      <AllAppNavigation.Screen name="drawer" children={AllDrawerNavigation} />
    </AllAppNavigation.Navigator>
  </NavigationContainer>
);
export default RootNavigator;
