import React from "react";
import Layout from "../components/Layout";
import { Button } from "react-native-elements";
const FifthScreen = ({ navigation, route }) => {
  return (
    <>
      <Layout name={route.name} />
      <Button
        type="solid"
        title="First Screen"
        containerStyle={{
          justifyContent: "center",
          alignItems: "center",
          height: 200
        }}
        buttonStyle={{
          borderColor: "#490222",
          backgroundColor: "#490222",
          width: 160,
          borderWidth: 1.3
        }}
        titleStyle={{
          color: "#fff"
        }}
        onPress={() => navigation.navigate("tab")}
      />
    </>
  );
};

export default FifthScreen;
