import React from "react";
import { View, Text } from "react-native";
import Layout from "../components/Layout";
const FourthScreen = ({ navigation, route }) => {
  return (
    <>
      <Layout name={route.name} />
    </>
  );
};

export default FourthScreen;
