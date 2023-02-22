import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Derana</Text>
      <Text style = {styles.lanka}>From Sri Lanka</Text>
      <Button style ={styles.butt} title = "Username" onPress={() => console.log("Button tapped")}></Button>
      <Button style ={styles.butt} title = "Password" onPress={() => console.log("Button tapped")}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,//filled
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "green"
  },
  title: {
    paddingVertical: 10,
    backgroundColor: '#61daf',
    color: 'white',
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
  },
  lanka:{
    backgroundColor: '#61daf',
    color: 'black',
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
  },
  butt:{
    backgroundColor:'white',
  },
  butt:{
    backgroundColor:'white',
  },
});
