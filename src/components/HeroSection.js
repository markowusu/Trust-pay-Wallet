import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconBadge from './IconBadge';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import IconCard from './IconCard';
import constants from '../../constants';

const InnerCardWidth = 45;
const InnerCardHeight = 45;
const InnerCardRadius = 50;

const OuterCardWidth = 70;
const OuterCardHeight =90;

const HeroSection = ({children}) => {
  return (
    <View style={style.container}>
      <LinearGradient
        useAngle={true}
        angle={350}
        angleCenter={{x: 0.6, y: 0.6}}
        locations={[0, 0.4, 0.7]}
        colors={['#194150', '#277A78', '#194150']}
        style={style.linearGradient}>
        <View style={style.headerRow}>
          <IconCard bgColor={constants.kIconCardGrey}>
            <Icon name="bars" color={constants.kWhite} size={24} />
          </IconCard>

          <Text style={style.textStyle}>
            <Text style={{color: constants.kGrayText, fontSize: 19}}>
              Welcome back,
            </Text>
            Apri !
          </Text>

          <IconCard bgColor={constants.kIconCardGrey}>
            <View style={style.innerCardWrapper}>
              <Icon
                name="bell-o"
                color={constants.kWhite}
                size={24}
                style={{zIndex: -1}}
              />
              <IconBadge />
            </View>
          </IconCard>
        </View>

        <View style={{flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
            <Text style={{color:constants.kWhite,fontSize:19, fontWeight:"normal"}}>Your Balance</Text>
            <Text style={{color:constants.kWhite,fontSize:39, fontWeight:"600",marginTop:5}}>$70,897</Text>

          </View>

          <View style={{flexDirection:"row",alignItems:"center", justifyContent:"space-evenly", marginTop:20 }}>
          <IconCard cardHeight={OuterCardHeight} cardWidth={OuterCardWidth} bgColor="#A7B4B0" cardRadius={25} cardBorderColor="#E0E0E0"   >
            <View style={{flexDirection:"column",alignItems:"center", justifyContent:"center"}}> 
            <IconCard bgColor="#C8D0CE" cardWidth={InnerCardWidth} cardHeight={InnerCardHeight} cardBorderColor="#E0E0E0" cardZIndex={9999} cardRadius={InnerCardRadius} shadowEffect={true} >
            <Icon name="send-o"  color={constants.kWhite} size={24}/>
            </IconCard>
            <Text style={{color:constants.kWhiteCardText, fontSize:16}}>
                Send
            </Text>
            </View>
          </IconCard>

          <IconCard cardHeight={OuterCardHeight} cardWidth={OuterCardWidth} bgColor="#A7B4B0" cardRadius={25} cardBorderColor="#E0E0E0" >
            <View style={{flexDirection:"column",alignItems:"center", justifyContent:"center"}}> 
            <IconCard bgColor="#C8D0CE" cardWidth={InnerCardWidth} cardHeight={InnerCardHeight} cardBorderColor="#E0E0E0" cardZIndex={9999} cardRadius={InnerCardRadius} shadowEffect={true}>
            <Ionicons name="md-wallet"  color={constants.kWhite} size={24}/>
            </IconCard>
            <Text style={{color:constants.kWhiteCardText, fontSize:16}}>
                Pay
            </Text>
            </View>
          </IconCard>

          <IconCard cardHeight={OuterCardHeight} cardWidth={OuterCardWidth} bgColor="#A7B4B0" cardRadius={25} cardBorderColor="#E0E0E0" >
            <View style={{flexDirection:"column",alignItems:"center", justifyContent:"center"}}> 
            <IconCard bgColor="#C8D0CE" cardWidth={InnerCardWidth} cardHeight={InnerCardHeight} cardBorderColor="#E0E0E0" cardZIndex={9999} cardRadius={InnerCardRadius} shadowEffect={true}>
            <Feather name="plus-square"  color={constants.kWhite} size={24}/>
            </IconCard>
            <Text style={{color:constants.kWhiteCardText, fontSize:16}}>
                Top Up
            </Text>
            </View>
          </IconCard>

          <IconCard cardHeight={OuterCardHeight} cardWidth={OuterCardWidth} bgColor="#A7B4B0" cardRadius={25} cardBorderColor="#E0E0E0" >
            <View style={{flexDirection:"column",alignItems:"center", justifyContent:"center"}}> 
            <IconCard bgColor="#C8D0CE" cardWidth={InnerCardWidth} cardHeight={InnerCardHeight} cardBorderColor="#E0E0E0" cardZIndex={9999} cardRadius={InnerCardRadius} shadowEffect={true}>
            <Ionicons name="grid"  color={constants.kWhite} size={24}/>
            </IconCard>
            <Text style={{color:constants.kWhiteCardText, fontSize:16}}>
                More
            </Text>
            </View>
          </IconCard>
            </View>
      </LinearGradient>
    </View>
  );
};

const style = StyleSheet.create({
  container: {   
      flex:0, 
    // margin: 10,
    marginBottom:20,

  },
  linearGradient: {
    width: '100%',
    height: 330,
    borderRadius: 35,
    borderColor: '#FAFAFA',
    borderWidth: 2,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 30,
    justifyContent: 'space-around',
  },
  textStyle: {
    color: constants.kWhite,
    fontSize: 22,
  },
  innerCardWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
});

export default HeroSection;
