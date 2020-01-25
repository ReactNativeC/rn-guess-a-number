import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';

const TitleText = (props) => {
return( <Text style={{ ...styles.title, ...props.style,}}>{props.children}</Text> )
};

const styles = StyleSheet.create({
  title: {
    fontSize: Dimensions.get('window').width < 400 ? 12 : 18, 
    fontFamily: 'OpenSans-Bold',
  }
});

export default TitleText;