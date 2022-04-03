import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

class ScrollViewWrapper extends Component {
  render() {
    const {children, horizontalState = false, showVerticalTab=false, showHorizontalTab=false,style={}} = this.props;
    return (
     
      <ScrollView
        horizontal={horizontalState ? true : false}
        showsVerticalScrollIndicator={showVerticalTab}
        showsHorizontalScrollIndicator={showHorizontalTab} style={style}>
         
           {children}
       

      </ScrollView>
    );
  }
}

export default ScrollViewWrapper;
