import React from 'react';

import constants from './constants';

import { NavigationContainer } from '@react-navigation/native';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Tabs from './src/components/navigation/Tabs';


const App = () => {
 


  return (
    <NavigationContainer>
   <Tabs/>
    </NavigationContainer>
  );
};



export default App;
