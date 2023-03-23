import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
// import { View } from 'react-native';

// import BackgroundOuterWapper from './src/Components/BackgroundOuterWapper';
// import Login from './src/Components/Login';
// import ReturnItem from './src/Components/ReturnItem/ReturnItem';
// import Calculater from './Components/Calculater';
// import CreateNewPassword from './src/Components/CreateNewPassword/CreateNewPassword';
// import EnterCustomerFeedback from './src/Components/EnterCustomerFeedback/EnterCustomerFeedback';
// import BellowButtonSets from './src/Components/BellowButtonSets/tabs';
// import BottomNav from './src/Components/BottomNav';
// import { NavigationContainer } from "@react-navigation/native";
//  import Tabs from './src/Components/NavigationButton';
//  import Tabss from './src/Components/NAvigationButton_02';
// import ViewReturn from './src/Components/ViewReturn/ViewReturn'
// import Table from './src/Components/ViewReturn/ViewReturn'
//   import ItemList from './src/Components/DaliItemList/DaliyItemList';
//   import NavigationBar from './src/Components/new';
// import Sidebar from './src/Components/SideBar'
// import Sidebar01 from './src/Components/SideBar_01';
import ItemList from './src/Components/DaliItemList/DaliyItemList';


export default function App() {
  return (
    // <Login/>
    // <ReturnItem/>
    // <Calculater/>
    // <CreateNewPassword/>
    // <EnterCustomerFeedback/>
    // <BackgroundOuterWapper/>
    // <BottomNav/>
    // <NavigationContainer>
    // <Tabs/>
    // <NavigationContainer/>
    // <Tabss/>
    // <Table/>
    // <ItemList/>
    // <NavigationBar/>
    // <NavigationBar/>
    // <Sidebar/>
    // <Sidebar01/>
    <ItemList/>

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
