import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Plus...
import home from "../assets/home.png";

// Font Awesome Icons...
import { FontAwesome5 } from "@expo/vector-icons";
import { useRef } from "react";

const Tab = createBottomTabNavigator();

// Hiding Tab Names...
const Tabss = () => {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          // Floating Tab Bar...
          style: {
            backgroundColor: "#385C94",
            position: "absolute",
            bottom: 40,
            marginHorizontal: 20,
            // Max Height...
            height: 60,
            borderRadius: 10,
            // Shadow...
            shadowColor: "#FF9900",
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            paddingHorizontal: 20,
          },
        }}
      >
        {
          // Tab Screens....
          // Tab ICons....
        }
        <Tab.Screen
          name={"Route"}
          component={RouteScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="home"
                  size={20}
                  color={focused ? "#FF9900" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name={"NewCustomer"}
          component={NewCustomerScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="search"
                  size={20}
                  color={focused ? "#FF9900" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        {
          // Extra Tab Screen For Action Button..
        }

        <Tab.Screen
          name={"ActionButton"}
          component={EmptyScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TouchableOpacity>
                <View
                  style={{
                    width: 55,
                    height: 55,
                    backgroundColor: "black",
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: Platform.OS == "android" ? 50 : 30,
                  }}
                >
                  <Image
                    source={home}
                    style={{
                      width: 22,
                      height: 22,
                      tintColor: "white",
                    }}
                  ></Image>
                </View>
              </TouchableOpacity>
            ),
          }}
        ></Tab.Screen>

        <Tab.Screen
          name={"FeedBack"}
          component={FeedBackScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="bell"
                  size={20}
                  color={focused ? "#FF9900" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>

        <Tab.Screen
          name={"Notification"}
          component={NotificationScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: "absolute",
                  top: 20,
                }}
              >
                <FontAwesome5
                  name="user-alt"
                  size={20}
                  color={focused ? "#FF9900" : "gray"}
                ></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true,
              }).start();
            },
          })}
        ></Tab.Screen>
      </Tab.Navigator>

      <Animated.View
        style={{
          width: getWidth() - 20,
          height: 2,
          backgroundColor: "#FF9900",
          position: "absolute",
          bottom: 50,
          // Horizontal Padding = 20...
          left: 20,
          borderRadius: 20,
          transform: [{ translateX: tabOffsetValue }],
        }}
      ></Animated.View>
    </NavigationContainer>
  );
};

function getWidth() {
  let width = Dimensions.get("window").width;

  // Horizontal Padding = 20...
  width = width - 20;

  // Total five Tabs...
  return width / 5;
}

function EmptyScreen() {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    ></View>
  );
}

function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notification!</Text>
    </View>
  );
}

function RouteScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Route!</Text>
    </View>
  );
}

function FeedBackScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>FeedBack!</Text>
    </View>
  );
}

function NewCustomerScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>NewCustomer!</Text>
    </View>
  );
}
export default Tabss;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#385C94",
    alignItems: "center",
    justifyContent: "center",
  },
});
