import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import { View } from 'react-native';

// import BackgroundOuterWapper from './src/Components/BackgroundOuterWapper';
// import Login from './src/Components/Login';
import ReturnItem from './src/Components/ReturnItem';
// import Calculater from './Components/Calculater';
// import CreateNewPassword from './src/Components/CreateNewPassword/CreateNewPassword';
// import EnterCustomerFeedback from './src/Components/EnterCustomerFeedback/EnterCustomerFeedback';
// import BellowButtonSets from './src/Components/BellowButtonSets/tabs';
// import BottomNav from './src/Components/BottomNav';
// import { NavigationContainer } from "@react-navigation/native";
// import Tabs from './src/Components/NAvigationButton';


export default function App() {
  return (
    // <Login/>
    <ReturnItem/>
    // <Calculater/>
    // <CreateNewPassword/>
    // <EnterCustomerFeedback/>
    // <BackgroundOuterWapper/>
    // <BottomNav/>
    // <NavigationContainer>
    //   <Tabs/>
    // </NavigationContainer>
    // <Tabs/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
