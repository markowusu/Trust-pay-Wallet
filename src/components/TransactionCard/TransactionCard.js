import React from 'react';
import {View, Text,StyleSheet, Image} from 'react-native';
import IconCard from "../IconCard";
import constants from "../../../constants";
import Ionicons from 'react-native-vector-icons/Ionicons';






const TransactionCard = (props)=>{
    const {iconName, headerText, date, subscription, amount,imgUrl} =props;
    return(
<IconCard  cardHeight={80}  cardRadius={18} bgColor={constants.kWhite}  cardBorderColor="#f7f7f7" style={[{width:370,marginTop:10,marginLeft:12,borderWidth:2,flex:1}]} >
<View style={style.transactionIconWrapper}>
        <View style={style.headerSection}>
            <IconCard cardHeight={50} cardWidth={50} bgColor={"#F6F6F7"} cardBorderColor={"#F5F5F6"}>
            <Image source={imgUrl} style={{width:28, height:28,}}/>
            </IconCard>
            <View style={style.headerText}>
                <Text style={style.mainText}>{headerText}</Text>
                <Text style={style.subText}>{date}</Text>
            </View>
        </View>

        <View style={style.rightElement}>
            <Text style={style.rightMainText}>$ {amount } </Text>
            <Text style={style.subText}> {subscription} </Text>

        </View>

</View>

</IconCard>
    );

}

const style= StyleSheet.create({
    transactionIconWrapper:{
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"space-between",
        
    },
    headerSection:{
        flexDirection:"row",
        alignItems:"flex-start",
        justifyContent:"flex-start"
    },
    headerText:{
        flexDirection:"column",
        marginLeft:10,
        alignItems:"flex-start",
        justifyContent:"flex-start"
    },
    rightElement:{
        flexDirection:"column",
        marginBottom:10,
        alignItems:"flex-start",
        justifyContent:"space-evenly",
        marginLeft:90,
    },
    mainText:{
        fontSize:19,
        fontWeight:"500",
        color: constants.kTransactHeadColor,
    },
    rightMainText:{
        fontSize:19,
        fontWeight:"500",
        color:constants.kGreenText,
    },
    subText:{
        marginTop:3,
        color:constants.kSubText,
    }
})

export default TransactionCard;