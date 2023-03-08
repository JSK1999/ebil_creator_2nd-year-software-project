import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import * as Font from "expo-font";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      PottaOne: require("../src/front/PottaOne.ttf"),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
          <View>
            <Text
              style={{ fontFamily: "PottaOne", fontSize: 90, color: "red" }}
            >
              Derana
            </Text>
            {/* <Text style={{ fontSize: 21,textAlign:"right",top:0,position:"relative",}}>
              From Sri Lanka
            </Text> */}
          </View>
      );
    } else {
      return null;
    }
  }
}
