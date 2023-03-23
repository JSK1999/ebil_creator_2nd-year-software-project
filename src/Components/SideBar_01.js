import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Animated, PanResponder } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Sidebar01 = () => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const animatedValue = new Animated.Value(0);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: animatedValue }], { useNativeDriver: false }),
    onPanResponderRelease: (e, gestureState) => {
      if (gestureState.dx < -100) {
        setIsOpen(false);
        Animated.timing(animatedValue, {
          toValue: -Dimensions.get('window').width * 0.4,
          duration: 300,
          useNativeDriver: false
        }).start();
      } else {
        setIsOpen(true);
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false
        }).start();
      }
    }
  });

  const toggleSidebar = () => {
    if (isOpen) {
      setIsOpen(false);
      Animated.timing(animatedValue, {
        toValue: -Dimensions.get('window').width * 0.4,
        duration: 300,
        useNativeDriver: false
      }).start();
    } else {
      setIsOpen(true);
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      }).start();
    }
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(item.screen)}>
      <FontAwesome5 name={item.icon} size={20} color="#000" />
      <Text style={styles.buttonLabel}>{item.label}</Text>
    </TouchableOpacity>
  );

  const buttons = [
    { label: 'Home', icon: 'home', screen: 'Home' },
    { label: 'Change Password', icon: 'key', screen: 'ChangePassword' },
    { label: 'Calculator', icon: 'calculator', screen: 'Calculator' },
    { label: 'Contact Us', icon: 'phone', screen: 'ContactUs' },
    { label: 'Product List', icon: 'shopping-cart', screen: 'ProductList' },
    { label: 'Settings', icon: 'cog', screen}
  ]
}
export default Sidebar01;