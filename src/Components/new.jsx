import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const NavigationBar = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonPress = (button) => {
    setActiveButton(button);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, activeButton === 'route' && styles.activeButton]}
        onPress={() => handleButtonPress('route')}
      >
        <Image source={require('../assets/route.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Route</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, activeButton === 'new_customer' && styles.activeButton]}
        onPress={() => handleButtonPress('new_customer')}
      >
        <Image source={require('../assets/new customer.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>New Customer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, activeButton === 'home' && styles.activeButton, styles.homeButton]}
        onPress={() => handleButtonPress('home')}
      >
        <Image source={require('../assets/home.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, activeButton === 'feedback' && styles.activeButton]}
        onPress={() => handleButtonPress('feedback')}
      >
        <Image source={require('../assets/feedback.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Feedback</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, activeButton === 'notification' && styles.activeButton]}
        onPress={() => handleButtonPress('notification')}
      >
        <Image source={require('../assets/notification.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>notification</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#385C94',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
  },
  activeButton: {
    backgroundColor: '#FF9900',
  },
  homeButton: {
    width: '50%',
  },
  buttonImage: {
    width: 25,
    height: 25,
    marginBottom: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

