import React from 'react';
import HeroSection from '../HeroSection';
import constants from '../../../constants';
import ReSendSection from '../BodySection/ReSendSection';
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
import ScrollViewWrapper from '../ScrollViewWrapper';

function Home(){

    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : constants.kScreenBg,
        
      };
    return (
        <SafeAreaView style={[backgroundStyle,styles.sectionContainer,]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollViewWrapper>
        <HeroSection />
        <ReSendSection/>
        </ScrollViewWrapper>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
     flex:1,
     flexDirection:'column',

    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });

export default Home;