import React from "react";
import { View, Text } from "react-native";

const FourthScreen = ({ navigation, route }) => {
  return (
    <>
      <Layout name={route.name} />
    </>
  );
};

export default FourthScreen;
