import React from 'react';
import { Text, StyleSheet, ShadowPropTypesIOS } from 'react-native';

const TitleText = (props) => {
return( <Text style={{ ...styles.title, ...props.style,}}>{props.children}</Text> )
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18, 
    fontFamily: 'OpenSans-Bold',
  }
});

export default TitleText;