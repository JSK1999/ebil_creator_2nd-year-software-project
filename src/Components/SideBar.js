import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


const SideBar = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/profile.png')}
            style={{ width: 80, height: 80, borderRadius: 40 }}
          />
          <Text style={styles.headerText}>User Name</Text>
        </View>
        <TouchableOpacity style={[styles.button, styles.activeButton]}>
          <Image
            source={require('../assets/home_02.png')}
            style={{ width: 20, height: 20, tintColor: 'black' }}
          />
          <Text style={[styles.buttonText, styles.activeIcon]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../assets/calculator.png')}
            style={{ width: 20, height: 20, tintColor: '#333' }}
          />
          <Text style={styles.buttonText}>Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../assets/contact us.png')}
            style={{ width: 20, height: 20, tintColor: '#333' }}
          />
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../assets/product list.png')}
            style={{ width: 20, height: 20, tintColor: '#333' }}
          />
          <Text style={styles.buttonText}>Product List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../assets/setting.png')}
            style={{ width: 20, height: 20, tintColor: '#333' }}
          />
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../assets/logout.png')}
            style={{ width: 20, height: 20, tintColor: '#333' }}
          />
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  };
export default SideBar;  


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      width: '40%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 100,
    },
    header: {
      backgroundColor: 'yellow',
      height: 150,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderTopWidth: 1,
      borderTopColor: '#ccc',
    },
    buttonText: {
      marginLeft: 20,
      fontSize: 16,
    },
    icon: {
      color: '#333',
      fontSize: 24,
    },
    activeButton: {
      backgroundColor: 'white',
    },
    activeIcon: {
      color: 'black',
    },
  });
  