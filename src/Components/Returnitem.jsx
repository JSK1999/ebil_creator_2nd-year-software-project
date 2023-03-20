import { Text, View, StyleSheet, Button, TouchableOpacity,Image,ImageBackground,TextInput} from "react-native";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { startDetecting } from "react-native/Libraries/Utilities/PixelRatio";
import { DeviceEventEmitter } from 'react-native'
import axios from "axios";
import Background from "../Background";


const ReturnItem = () => {
  // const [hi,setHi]=useState('');
  // const bb=()=>{axios.get('http://localhost:3001/shop/ReadItemGroup')
  // .then(function (response) {
  //   console.log(response)
  // })
  // .catch(function (error) {
  //   console.log(error);
  // })};
  // bb();

  const [selectedLanguage, setSelectedLanguage] = useState(null);
  
  return (
    // <ImageBackground source={require('../assets/ss.png')} style={{ width: vw(102), height: vh(104.9)}} >
    <Background>

      <View style={styles.viewhead}>
      <Text style={styles.heading1}>Return Order</Text>
      
      </View>
      <Text style={styles.para}>Shops</Text>

      <TouchableOpacity 
      disabled={true}>
      <Text>        Ekanayake Store</Text>
      </TouchableOpacity>

      <Text style={styles.para}>Catagory Name</Text>
      <View style={styles.viewpic}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
        mode="dropdown"
      >
        <Picker.Item label="Select a catagory " enabled={false}/>
        <Picker.Item label="Soap" value="C01" />
        <Picker.Item label="Beverage" value="C02" />
        <Picker.Item label="Nudles" value="C03" />
      </Picker>
      </View>

      <Text style={styles.para}>Manufacturer Name</Text>
      <View style={styles.viewpic}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
        mode="dropdown"
      >
        <Picker.Item label="Select a manufacturer " enabled={false}/>
        <Picker.Item label="Unilever" value="G01" />
        <Picker.Item label="raigam" value="G02" />
        <Picker.Item label="Coca-cola" value="G03" />
      </Picker>
      </View>

      <Text style={styles.para}>Product Name</Text>
      <View style={styles.viewpic}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
        mode="dropdown"
      >
        <Picker.Item label="Select a product" enabled={false}/>
        <Picker.Item label="Biscuit" value="I01" />
        <Picker.Item label="Cake" value="I02" />
        <Picker.Item label="Pen" value="I03" />
      </Picker>
      </View>

      <Text style={styles.para}>Product ID</Text>

      <View style={styles.v3}>

      <View style={styles.ProPrice}>
      <Text style={styles.para}>Product Price</Text>
              <TextInput style = {styles.input}
               placeholder = "  120/="
               backgroundColor='#ccffff'
               disabled={true}
               />
      </View>
      <View style={styles.qty}>
      <Text style={styles.para}>Quantity</Text>
      <View style={styles.viewpic}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
        mode="dropdown"
        
      >
        
        <Picker.Item label="Select item" enabled={false}/>
        <Picker.Item label="1" value="Q01" />
        <Picker.Item label="2" value="Q02" />
        <Picker.Item label="3" value="Q03" />
      </Picker>
      </View>
      </View>
      </View>
      
      <View style={styles.buttons}>
      <View style={styles.v1}>
      <Button style={styles.B1}
        title="       Add item        "
        color="#FF9900"
      
        // onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      </View>

      <View style={styles.v2}>
      <Button
        title="View the order"
        color="#FF9900"
        // onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      </View>
      </View>

      <View style={styles.images}>
      {/* <Image
        style={{width:45,height:50}}
        source={require('../assets/map_white.png') 
        }
      /> */}
            {/* <Image
        style={{width:45,height:50}}
        source={require('../assets/customer_02.png') 
        }
      /> */}
                  {/* <Image
        style={{width:60,height:55}}
        source={require('../assets/home.png') 
        }
      /> */}
                  {/* <Image
        style={{width:40,height:50}}
        source={require('../assets/feedbak_01.png') 
        }
      /> */}
                  {/* <Image
        style={{width:35,height:45}}
        source={require('../assets/notification.png') 
        }
      /> */}
      </View>
      </Background>

      // </ImageBackground>
  );
}

export default ReturnItem;


const styles = StyleSheet.create({
  heading1: {
    fontSize: 40,
    paddingBottom:15,
    marginTop:113,
    alignItems: 'center',
    
  },
  para:{
    fontSize:20,
    alignItems: 'flex-start',
    marginTop:10,
    paddingLeft:10,
    
    
  },
  test1:{
    fontSize:30,
  },
  v1:{
    alignItems: 'center',
    
  },
  v2:{
    marginLeft:31,
    alignItems: 'center',
  },
  viewpic:{
    backgroundColor:'#ccffff',
    paddingLeft:15,
  },
  viewhead:{
    alignItems: 'center',
  },
  para1:{
    fontSize:20, 
  },
  buttons:{
    flexDirection: 'row',
    padding:10,
    justifyContent:'space-between',
    marginHorizontal:20,
  },
  v3:{
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row',
    marginHorizontal:30
  },
  ProPrice:{
    flexDirection:'column',
    
  },
  images:{
    flexDirection:'row',
    padding:16,
    justifyContent:'space-around'
  },
  



});