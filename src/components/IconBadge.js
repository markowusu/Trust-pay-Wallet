import React from "react";
import {View, Text} from  "react-native";
import constants from "../../constants";

const IconBadgeStyle={
    width:10,
    height: 10,
    borderRadius:12,
    borderWidth:2,
    borderColor:constants.KRoundBadge,
    backgroundColor: constants.KRoundBadge,
    position:"absolute",
    zIndex: 50.0,
};

const IconBadge = ()=>{
   return (
       <View style={IconBadgeStyle}>

       </View>
   );
};

export default IconBadge;