import React from "react";
import { Text, View,StyleSheet,Image,TouchableOpacity} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import HomeScreen from '../Give file path';
// import Route from '../Give file path';
// import NewCustomer from '../Give file path';
// import Feedback from '../Give file path';
// import Notification from '../Give file path';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLable: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
          ...styles.shadow
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon:({focused}) =>(
         <view style={{alignItem: 'center',justifyContent:'center',top:10}}>
          <Image 
          source={require('../../assets/Buttons/Home.png')}
          resizeMode='contain'
          style={{
            width:25,
            height:25,
            tintColor:focused ? '#e32f45' : '#748c94'
          }}
          />
          <Text style={{color: focused ? '#e32f45' : '#748c94'}}>Home</Text>

         </view> 
        ),
      }}/>
      <Tab.Screen name="Route" component={Route} />
      <Tab.Screen name="NewCustomer" component={NewCustomer} />
      <Tab.Screen name="Feedback" component={Feedback} />
      <Tab.Screen name="Notification" component={Notification} />
    </Tab.Navigator>
  );
}
const style = StyleSheet.create({
  shadow:{
    shadowColor:'#7F5DF0',
    shadowOffset:{
      width:0,
      height:10,
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5
  }


});

export default Tabs;
