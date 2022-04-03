import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Home';
import constants from '../../../constants';
import FoundationIcons from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
//

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        //    top:-2,
      }}
      onPress={onPress}>
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          borderColor: '#D6D6D6',
          borderWidth: 2,
          backgroundColor: '#2A9D8F',
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: constants.kWhite,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.customTabBarStyle}>
                <FoundationIcons
                  name="home"
                  color={focused ? '#2A9D8F' : '#D6D6D6'}
                  size={28}
                />
                {focused && (
                  <Entypo name="dot-single" color={'#2A9D8F'} size={20} />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="payment"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.customTabBarStyle}>
                <MaterialIcons
                  name="insert-chart-outlined"
                  color={focused ? '#2A9D8F' : '#D6D6D6'}
                  size={28}
                />
                {focused && (
                  <Entypo name="dot-single" color={'#2A9D8F'} size={20} />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="favorite"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.customTabBarStyle}>
                <FontAwesome name="eercast" color={'#fff'} size={45} />
                {/* {focused && (
                  <Entypo name="dot-single" color={'#2A9D8F'} size={24} />
                )} */}
              </View>
            );
          },
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="middle"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.customTabBarStyle}>
                <Ionicons
                  name="md-wallet"
                  color={focused ? '#2A9D8F' : '#D6D6D6'}
                  size={28}
                />
                {focused && (
                  <Entypo name="dot-single" color={'#2A9D8F'} size={20} />
                )}
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="settings"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.customTabBarStyle}>
                <MaterialIcons
                  name="person-outline"
                  color={focused ? '#2A9D8F' : '#D6D6D6'}
                  size={28}
                />
                {focused && (
                  <Entypo name="dot-single" color={'#2A9D8F'} size={20} />
                )}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  customTabBarStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Tabs;
