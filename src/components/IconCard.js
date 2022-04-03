import React from "react";
import  {View,Text} from "react-native";
import constants from "../../constants";

const IconCardStyle = {
    alignItems:"center",
    justifyContent:"center",
    borderWidth:1,
    shadowColor: constants.kShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 25,
  
   
};


const IconCardStyleOnly={
    alignItems:"center",
    justifyContent:"center",
    borderWidth:1,
};
const  IconCard =(props)=>{
    const {children,bgColor,cardWidth=40,cardHeight=38,cardRadius=12,cardZIndex=1,cardBorderColor="#D6D6D6", style={}, shadowEffect=false , roundCard=false, RoundCardWidth=45,RoundCardHeight=45,RoundCardRadius=50} = props
    return (
       (shadowEffect) ?
       <View style={ [IconCardStyle,{backgroundColor:bgColor,width: roundCard ? RoundCardWidth:cardWidth , height: roundCard ? RoundCardHeight: cardHeight ,borderRadius: roundCard ? RoundCardRadius:cardRadius, zIndex:cardZIndex,borderColor:cardBorderColor},style]} >
        {children} 
        </View> 
        :
<View style={ [IconCardStyleOnly,{backgroundColor:bgColor,width: roundCard ? RoundCardWidth:cardWidth, height: roundCard ? RoundCardHeight: cardHeight ,borderRadius: roundCard ? RoundCardRadius:cardRadius, zIndex:cardZIndex,borderColor:cardBorderColor},style]} >
        {children} 
        </View> 
    
    );
}

export default IconCard;