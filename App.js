import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { View } from 'react-native';

// import BackgroundOuterWapper from './src/Components/BackgroundOuterWapper';
// import Login from './src/Components/Login';
// import Returnitem from './Components/Returnitem;'
// import Calculater from './Components/Calculater';
// import CreateNewPassword from './src/Components/CreateNewPassword/CreateNewPassword';
// import EnterCustomerFeedback from './src/Components/EnterCustomerFeedback/EnterCustomerFeedback';
import BellowButtonSets from './src/Components/BellowButtonSets/BellowButtonSets';

export default function App() {
  return (
    // <Login/>
    // <Returnitem/>
    // <Calculater/>
    // <CreateNewPassword/>
    // <EnterCustomerFeedback/>
    // <BackgroundOuterWapper/>
        <View style={{ flex: 1 }}>
      {/* Your other app components here */}
      <BellowButtonSet />
    </View>

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
