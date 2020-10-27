import React from "react";
import Layout from "../components/Layout";

const SecondScreen = ({ navigation, route }) => {
  return (
    <>
      <Layout name={route.name} />
    </>
  );
};

export default SecondScreen;
