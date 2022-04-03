import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import constants from '../../../constants';
import IconCard from '../IconCard';
import TransactionCard from '../TransactionCard/TransactionCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReSendItem from './ReSendItem';
import ScrollViewWrapper from '../ScrollViewWrapper';
import {PrivateValueStore} from '@react-navigation/native';
const cardWidth = 60;
const cardHeight = 60;
const cardRadius = 60;

const transactionList =[
    {name: "Figma", date:"February,01 2021", amount:"4,567", type:"Subscription" , imgUrl:require('../../assets/images/figma.png')},
    {name: "Netflix", date:"February,22 2021", amount:"10,001", type:"Subscription",  imgUrl:require('../../assets/images/netflix.png')},
    {name: "Visa", date:"March,01 2021", amount:"300", type:"Subscription",  imgUrl:require('../../assets/images/visa.png')},
    {name: "Binance", date:"March,04 2022", amount:"56,560", type:"Subscription", imgUrl:require('../../assets/images/binance.png')},
    {name: "Apple Pay", date:"March,23 2022", amount:"40,567", type:"Subscription",  imgUrl:require('../../assets/images/apple-pay.png')},
]
const imgList = [
  {
    name: 'Mark Owusu',
    id: 0,
    imgUrl: require('../../assets/images/man-stands-with-his-basketball.jpg'),
    amount: '2,345',
  },
  {
    name: 'Tiana Saris',
    id: 1,
    imgUrl: require('../../assets/images/a-barista-smiles-proudly-stood-in-her-cafe.jpg'),
    amount: '500',
  },
  {
    name: 'Naa Botch',
    id: 2,
    imgUrl: require('../../assets/images/young-woman-portrait.jpg'),
    amount: '2,345',
  },
  {
    id: 3,
    name: 'Sarah Lee',
    imgUrl: require('../../assets/images/woman-in-grey-sweater-smiles-and-leans-against-a-railing.jpg'),
    amount: '2,345',
  },
];
const ReSendSection = () => {
  return (
    <View style={style.ReSendWrapper}>
      <Text style={[style.ReSendText, style.ReSendTextPadding]}>
        {' '}
        Send again
      </Text>
      <View style={style.senderOption}>
        <IconCard
          bgColor={constants.kWhite}
          cardWidth={cardWidth}
          cardHeight={cardHeight}
          cardRadius={cardRadius}
          cardZIndex={999}
          cardBorderColor={constants.kCardColor}
          style={{elevation: 25, shadowColor: constants.kShadow}}>
          <Ionicons
            name="md-search-outline"
            color={constants.kDarkGray}
            size={25}
            style={{fontWeight: 'bold'}}
          />
        </IconCard>
        <ScrollViewWrapper horizontalState={true}>
          {imgList.map((value, id) => {
            return (
              <ReSendItem
                user={value.name}
                amount={value.amount}
                imgUrl={value.imgUrl}
                key={id}
              />
            );
          })}
        </ScrollViewWrapper>
      </View>

      <View style={style.RescentTrans}>
        <View>
          <Text
            style={[style.ReSendText, {textAlign: 'left', marginBottom: 10}]}>
            {' '}
            Recent Transactions
          </Text>
        </View>

        <View>
          <Text
            style={{color: constants.kRed, textAlign: 'right', fontSize: 17}}>
            See all
          </Text>
        </View>
      </View>

      {/* <ScrollViewWrapper horizontalState={false} style={{marginTop: 2,}}> */}
        <View style={{flex:1,}}>
       { transactionList.map((value,id)=>{
            return (
                <TransactionCard
                key={id}
            headerText={value.name}
            date={value.date}
            subscription={value.type}
            amount={value.amount}
            imgUrl={value.imgUrl}
            
          />
            );
        })
       }
          
        </View>
      {/* </ScrollViewWrapper> */}
    </View>
  );
};

const style = StyleSheet.create({
  ReSendWrapper: {
    flex: 1,
    margin: 10,
    backgroundColor: constants.kScreenBg,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  ReSendText: {
    color: constants.kDarkTextColor,
    marginLeft: 12,
    marginRight: 110,
    fontSize: 20,
    fontWeight: '500',
  },
  ReSendTextPadding: {
    paddingTop: 1,
  },
  senderOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: 6,
    marginTop: 10,
  },
  RescentTrans: {
    flexDirection: 'row',
    flex:1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default ReSendSection;
