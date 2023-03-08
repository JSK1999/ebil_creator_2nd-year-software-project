import React from "react";
import { View, ImageBackground } from "react-native";

const Background = ({ children }) => {
  return (
    <View>
      <ImageBackground
        source={require("../src/assets/bg.png")}
        style={{ height: "100%", width: "100%", resizeMode: "contain" }}
      />

      <View
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          top: 0,
          left: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </View>
    </View>
  );
};

export default Background;
