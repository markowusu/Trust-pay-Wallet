import React ,{Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import IconCard from '../IconCard';
import constants from '../../../constants';




class ReSendItem extends Component{ 

render(){
    const {user,amount,imgUrl} = this.props;
    return(
<>
<IconCard cardWidth={150} cardHeight={58} cardRadius={80} bgColor={constants.kWhite} cardBorderColor="#EBEBEB" style={style.IconCardWrapper}>
            <IconCard roundCard={true}>
<Image

style={{
    width:45,
    height:45,
    borderRadius:50,

}}

    source={imgUrl}
/>
            </IconCard>

                <View style={{flexDirection:"column", alignItems:"flex-start", justifyContent:"flex-start",marginRight:3 }}>
<Text style={[style.ResendUserName,{fontWeight:'500'},]}> {user}</Text>
<Text>${amount}</Text>
                </View>      

            
            </IconCard>
</>
    );
}
}

const style = StyleSheet.create({
    ResendUserName:{
        color:constants.kTextColor,
        fontSize:12,
     
    },
    IconCardWrapper:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        marginLeft:6,

    },
});

export default ReSendItem;