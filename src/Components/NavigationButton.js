// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

function RouteScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Route</Text>
    </View>
  );
}

function NewCustomerScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>New Customer</Text>
    </View>
  );
}
function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
      </View>
    );
  }
  function FeedbackScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feedback</Text>
      </View>
    );
  }
  function NotificationScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notification</Text>
      </View>
    );
  }

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Route') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'NewCustomer') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }else if (route.name === 'Home') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
            }else if (route.name === 'Feedback') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
            }else if (route.name === 'Notification') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'yellow',
        })}
      >
        <Tab.Screen name="Route" component={RouteScreen} />
        <Tab.Screen name="NewCustomer" component={NewCustomerScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Feedback" component={FeedbackScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Tabs;