import React from "react";
import { View, Text } from "react-native";
const Layout = props => {
  // destructues name and sets a default value
  const { name = "" } = props;
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1
      }}
    >
      <Text>{name} Screen</Text>
    </View>
  );
};

export default Layout;
