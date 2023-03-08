import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login';
// import Returnitem from './Components/Returnitem;'
// import Calculater from './Components/Calculater';
import CreateNewPassword from './Components/CreateNewPassword';

export default function App() {
  return (
    // <Login/>
    // <Returnitem/>
    // <Calculater/>
    <CreateNewPassword/>
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
